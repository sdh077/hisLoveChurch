const axios = require("axios");
const cheerio = require("cheerio");
const { writeFile } = require('fs');

const article = 'https://tgckorea.org/bbs/search.php?fld=all&stx=%EA%B3%A0%EC%83%81%EC%84%AD&onetable=articles&page=';
const log = console.log;
const getHtml = async (i) => {
    try {
        // eslint-disable-next-line max-len
        return await axios.get(`${article}${i}`);
    } catch (error) {
        console.error(error);
    }
};
const scrap = async () => {
    const uList = [];
    for (const index of [1, 2, 3, 4, 5])
        await getHtml(index)
            .then(html => {
                const $ = cheerio.load(html.data);
                const $bodyList = $(".sch_list").children(".sch_item");
                $bodyList.each(function (i, elem) {
                    uList.push($(this).find('.subj').attr('href'));
                });
            });
    return uList;
};
const scrapDetail = async () => {
    const file = [];
    const links = await scrap();
    for (const link of links) {
        const item = await detail(link);
        file.push(item);
    }
    const path = './article.json';
    writeFile(path, JSON.stringify(file, null, 2), (error) => {
        if (error) {
            console.log('An error has occurred ', error);
            return;
        }
        console.log('Data written successfully to disk');
    });
};
const detail = async (link) => {
    const html = await axios.get(link);
    const $ = cheerio.load(html.data);
    const title = $(".subject").text();
    const date = $(".tit .desc .date").text();
    const img = $(".view_image img").attr('src');
    const quo_txt01 = $(".quo_txt01").text();
    const content = $(".bo_con").html();
    return { title, img, quo_txt01, date, content, link };
};
scrapDetail().then();
