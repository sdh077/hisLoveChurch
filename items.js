const axios = require("axios");
const cheerio = require("cheerio");
const { writeFile } = require('fs');

const article = 'https://www.foodinko.com/page/';
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
    for (const index of [1, 2, 3, 4, 5, 6])
        await getHtml(index)
            .then(html => {
                const $ = cheerio.load(html.data);
                const $bodyList = $(".ast-row").children(".ast-archive-post");
                $bodyList.each(function (i, elem) {
                    const item = $(this).find('.entry-content').text().trim().split('\n')
                    uList.push({ name: item[0], address: item[1], local_id: 26 });
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
const latlng = async (address) => {
    const clientId = 'YOUR_NAVER_CLIENT_ID';
    const clientSecret = 'YOUR_NAVER_CLIENT_SECRET';

    const response = await axios.get(
        `https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode?query=${encodeURIComponent(address)}`,
        {
            headers: {
                'X-NCP-APIGW-API-KEY-ID': '2eopkzemiq',
                'X-NCP-APIGW-API-KEY': 'CYm4JXQWdLDoOeHC6vfbjkjBVxZu0S4RaE8fEhFM',
            },
        }
    );

    if (response.data.addresses.length > 0) {
        const { x, y } = response.data.addresses[0];
        return { x, y }
    } else {
        console.error('No results found');
    }
}
const createClient = require('@supabase/supabase-js').createClient
const supabase = createClient('https://mrhpbteqzpwrmvlorobs.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1yaHBidGVxenB3cm12bG9yb2JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3Mzc1ODcsImV4cCI6MjAyMTMxMzU4N30.A0-dVdgtd6UvMW1hagaLKprW1UzFtTQGRB8f0T--sec')

const items =
    [
        { name: '꼼다비뛰드', address: '서울 강남구 강남대로110길 62', local_id: 26 },
        { name: '브루클린더버거조인트', address: '서울 강남구 봉은사로84길 10', local_id: 26 },
        { name: '진곱창', address: '서울 광진구 아차산로 397', local_id: 26 },
        { name: 'ebt', address: '서울 강남구 논현로157길 55', local_id: 26 },
        { name: '칙피스 신사점', address: '서울 강남구 강남대로152길 69', local_id: 26 },
        {
            name: '모던아시안누들서비스',
            address: '서울 강남구 강남대로162길 41-20',
            local_id: 26
        },
        { name: '우정양곱창', address: '서울 강남구 도산대로30길 23 1층', local_id: 26 },
        { name: '카페 안온', address: ' 서울 마포구 고산길 19 1층', local_id: 26 },
        { name: '도우룸', address: '서울 서초구 동광로 99 2층', local_id: 26 },
        { name: '스크렘', address: '서울 강남구 봉은사로4길 17 1층', local_id: 26 },
        { name: '런던베이글뮤지엄', address: ' 서울 강남구 언주로168길 33', local_id: 26 },
        { name: '피키니키 라자냐', address: '서울 성동구 서울숲2길 14', local_id: 26 },
        { name: '마구로쇼쿠도', address: '서울 성동구 상원2길 1', local_id: 26 },
        { name: '멘야신', address: '서울 성동구 독서당로51길 15', local_id: 26 },
        { name: '내추럴하이', address: '서울 용산구 녹사평대로 248', local_id: 26 },
        { name: '모타운 서울', address: '서울 송파구 백제고분로45길 34-6', local_id: 26 },
        { name: '새비지가든', address: '서울 용산구 회나무로35길 5', local_id: 26 },
        { name: '재인', address: '서울 용산구 이태원로54길 48 2층', local_id: 26 },
        { name: '샤넌서울', address: '서울 용산구 한강대로80길 21-13', local_id: 26 },
        { name: '명가떡볶이', address: '서울 성동구 장터길 25-2', local_id: 26 },
        { name: '신숙', address: '서울 서초구 법원로3길 21', local_id: 26 },
        { name: '까까를로', address: '서울 성동구 왕십리로8길 21 1.5층', local_id: 26 },
        { name: '모츠커피', address: '서울 광진구 군자로3길 14', local_id: 26 },
        { name: '몬탁', address: '서울 서초구 서초대로32길 8', local_id: 26 },
        {
            name: '진켈란젤로 치즈케이크',
            address: '서울 영등포구 국회대로29길 14',
            local_id: 26
        },
        { name: '특삼겹', address: '서울 강서구 마곡중앙6로 66', local_id: 26 },
        { name: '식캣사인', address: '서울 용산구 원효로83길 7-2', local_id: 26 },
        { name: '하랑', address: '서울 강남구 선릉로112길 38', local_id: 26 },
        {
            name: '아브릴 pour vous',
            address: '서울 강서구 마곡서로 175',
            local_id: 26
        },
        { name: '니코니코라멘', address: '서울 강서구 가로공원로 173', local_id: 26 },
        { name: '일월카츠', address: '서울 종로구 계동길 17', local_id: 26 },
        { name: '센자이료쿠', address: '서울 강남구 선릉로161길 15-3', local_id: 26 },
        { name: '성하루', address: '서울 강남구 압구정로4길 13-17 2층', local_id: 26 },
        { name: '일일시호일', address: '서울 서초구 나루터로 79', local_id: 26 },
        { name: '키릴 파티스리', address: '서울 강서구 공항대로53길 23', local_id: 26 },
        { name: '해남원조김밥', address: '서울 서초구 방배중앙로25길 15', local_id: 26 },
        { name: '으랏차 주먹고기', address: '서울 서초구 동산로2길 47', local_id: 26 },
        { name: '뜨라또리아소띠', address: '서울 강남구 도산대로55길 43', local_id: 26 },
        { name: '신미경정통춘천닭갈비', address: '서울 서초구 방배로16길 11-3', local_id: 26 },
        { name: '신사시장 떡볶이집', address: '서울 강남구 압구정로29길 72-1', local_id: 26 },
        { name: '헝그리곰바', address: '서울 서초구 방배천로4안길 61', local_id: 26 },
        { name: '진미평양냉면', address: '서울 강남구 학동로 305-3', local_id: 26 },
        { name: '신사고집', address: '서울 서초구 나루터로 70', local_id: 26 },
        { name: '마리오네', address: '서울 성동구 성수이로12길 15', local_id: 26 },
        { name: '야키토리 묵', address: '서울 마포구 성미산로 165-1', local_id: 26 },
        { name: '104백사', address: '서울 용산구 이태원로54가길 7', local_id: 26 },
        { name: '꾸왁칼국수', address: '서울 중구 창경궁로 67-13', local_id: 26 },
        { name: '멘야시노기', address: '서울 서초구 주흥길 3', local_id: 26 },
        { name: '송돈', address: '서울 송파구 가락로 280', local_id: 26 },
        { name: '왕타이', address: '서울 용산구 이태원로 151 3층', local_id: 26 },
        { name: '나루떡볶이', address: '서울 광진구 광장로1길 18', local_id: 26 },
        { name: '유나기', address: '서울 서초구 신반포로 332', local_id: 26 },
        { name: '보길', address: '서울 송파구 오금로16길 10-8', local_id: 26 },
        { name: '서평면옥', address: '서울 동작구 보라매로5길 15', local_id: 26 },
        { name: '코우드', address: '서울특별시 관악구 봉천동 178-40', local_id: 26 }
    ]
async function play() {
    for (const item of items) {
        const output = await latlng(item.address)
        const res = await supabase
            .from('cafe')
            .update({ position: { lat: output.y, lng: output.x } })
            .eq('name', item.name)
    }
}
play()
// scrap().then(res => )
// scrapDetail().then();
