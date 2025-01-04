'use client'
import { Container } from '@/components/Container'
import clsx from 'clsx'
import React, { useState } from 'react'
import bibleJson from '@public/bible.json'

type BibleReadingPlan = {
  [month: string]: {
    [day: string]: string[];
  };
};

const macBible: BibleReadingPlan = {
  "1": {
    "0": [
      "창 1",
      "마 1",
      "스 1",
      "행 1"
    ],
    "1": [
      "창 2",
      "마 2",
      "스 2",
      "행 2"
    ],
    "2": [
      "창 3",
      "마 3",
      "스 3",
      "행 3"
    ],
    "3": [
      "창 4",
      "마 4",
      "스 4",
      "행 4"
    ],
    "4": [
      "창 5",
      "마 5",
      "스 5",
      "행 5"
    ],
    "5": [
      "창 6",
      "마 6",
      "스 6",
      "행 6"
    ],
    "6": [
      "창 7",
      "마 7",
      "스 7",
      "행 7"
    ],
    "7": [
      "창 8",
      "마 8",
      "스 8",
      "행 8"
    ],
    "8": [
      "창 9,창 10",
      "마 9",
      "스 9",
      "행 9"
    ],
    "9": [
      "창 11",
      "마 10",
      "스 10",
      "행 10"
    ],
    "10": [
      "창 12",
      "마 11",
      "느 1",
      "행 11"
    ],
    "11": [
      "창 13",
      "마 12",
      "느 2",
      "행 12"
    ],
    "12": [
      "창 14",
      "마 13",
      "느 3",
      "행 13"
    ],
    "13": [
      "창 15",
      "마 14",
      "느 4",
      "행 14"
    ],
    "14": [
      "창 16",
      "마 15",
      "느 5",
      "행 15"
    ],
    "15": [
      "창 17",
      "마 16",
      "느 6",
      "행 16"
    ],
    "16": [
      "창 18",
      "마 17",
      "느 7",
      "행 17"
    ],
    "17": [
      "창 19",
      "마 18",
      "느 8",
      "행 18"
    ],
    "18": [
      "창 20",
      "마 19",
      "느 9",
      "행 19"
    ],
    "19": [
      "창 21",
      "마 20",
      "느 10",
      "행 20"
    ],
    "20": [
      "창 22",
      "마 21",
      "느 11",
      "행 21"
    ],
    "21": [
      "창 23",
      "마 22",
      "느 12",
      "행 22"
    ],
    "22": [
      "창 24",
      "마 23",
      "느 13",
      "행 23"
    ],
    "23": [
      "창 25",
      "마 24",
      "에 1",
      "행 24"
    ],
    "24": [
      "창 26",
      "마 25",
      "에 2",
      "행 25"
    ],
    "25": [
      "창 27",
      "마 26",
      "에 3",
      "행 26"
    ],
    "26": [
      "창 28",
      "마 27",
      "에 4",
      "행 27"
    ],
    "27": [
      "창 29",
      "마 28",
      "에 5",
      "행 28"
    ],
    "28": [
      "창 30",
      "막 1",
      "에 6",
      "롬 1"
    ],
    "29": [
      "창 31",
      "막 2",
      "에 7",
      "롬 2"
    ],
    "30": [
      "창 32",
      "막 3",
      "에 8",
      "롬 3"
    ]
  },
  "2": {
    "0": [
      "창 33",
      "막 4",
      "스 9,10",
      "롬 4"
    ],
    "1": [
      "창 34",
      "막 5",
      "욥 1",
      "롬 5"
    ],
    "2": [
      "창 35,창 36",
      "막 6",
      "욥 2",
      "롬 6"
    ],
    "3": [
      "창 37",
      "막 7",
      "욥 3",
      "롬 7"
    ],
    "4": [
      "창 38",
      "막 8",
      "욥 4",
      "롬 8"
    ],
    "5": [
      "창 39",
      "막 9",
      "욥 5",
      "롬 9"
    ],
    "6": [
      "창 40",
      "막 10",
      "욥 6",
      "롬 10"
    ],
    "7": [
      "창 41",
      "막 11",
      "욥 7",
      "롬 11"
    ],
    "8": [
      "창 42",
      "막 12",
      "욥 8",
      "롬 12"
    ],
    "9": [
      "창 43",
      "막 13",
      "욥 9",
      "롬 13"
    ],
    "10": [
      "창 44",
      "막 14",
      "욥 10",
      "롬 14"
    ],
    "11": [
      "창 45",
      "막 15",
      "욥 11",
      "롬 15"
    ],
    "12": [
      "창 46",
      "막 16",
      "욥 12",
      "롬 16"
    ],
    "13": [
      "창 47",
      "눅 1:1~38",
      "욥 13",
      "고전 1"
    ],
    "14": [
      "창 48",
      "눅 1:38~80",
      "욥 14",
      "고전 2"
    ],
    "15": [
      "창 49",
      "눅 2",
      "욥 15",
      "고전 3"
    ],
    "16": [
      "창 50",
      "눅 3",
      "욥 16,욥 17",
      "고전 4"
    ],
    "17": [
      "출 1",
      "눅 4",
      "욥 18",
      "고전 5"
    ],
    "18": [
      "출 2",
      "눅 5",
      "욥 19",
      "고전 6"
    ],
    "19": [
      "출 3",
      "눅 6",
      "욥 20",
      "고전 7"
    ],
    "20": [
      "출 4",
      "눅 7",
      "욥 21",
      "고전 8"
    ],
    "21": [
      "출 5",
      "눅 8",
      "욥 22",
      "고전 9"
    ],
    "22": [
      "출 6",
      "눅 9",
      "욥 23",
      "고전 10"
    ],
    "23": [
      "출 7",
      "눅 10",
      "욥 24",
      "고전 11"
    ],
    "24": [
      "출 8",
      "눅 11",
      "욥 25,욥 26",
      "고전 12"
    ],
    "25": [
      "출 9",
      "눅 12",
      "욥 27",
      "고전 13"
    ],
    "26": [
      "출 10",
      "눅 13",
      "욥 28",
      "고전 14"
    ],
    "27": [
      "출 11,출 12:1~21",
      "눅 14",
      "욥 29",
      "고전 15"
    ]
  },
  "3": {
    "0": [
      "출 12:22~51",
      "눅 15",
      "욥 30",
      "고전 16"
    ],
    "1": [
      "출 13",
      "눅 16",
      "욥 31",
      "고후 1"
    ],
    "2": [
      "출 14",
      "눅 17",
      "욥 32",
      "고후 2"
    ],
    "3": [
      "출 15",
      "눅 18",
      "욥 33",
      "고후 3"
    ],
    "4": [
      "출 16",
      "눅 19",
      "욥 34",
      "고후 4"
    ],
    "5": [
      "출 17",
      "눅 20",
      "욥 35",
      "고후 5"
    ],
    "6": [
      "출 18",
      "눅 21",
      "욥 36",
      "고후 6"
    ],
    "7": [
      "출 19",
      "눅 22",
      "욥 37",
      "고후 7"
    ],
    "8": [
      "출 20",
      "눅 23",
      "욥 38",
      "고후 8"
    ],
    "9": [
      "출 21",
      "눅 24",
      "욥 39",
      "고후 9"
    ],
    "10": [
      "출 22",
      "요 1",
      "욥 40",
      "고후 10"
    ],
    "11": [
      "출 23",
      "요 2",
      "욥 41",
      "고후 11"
    ],
    "12": [
      "출 24",
      "요 3",
      "욥 42",
      "고후 12"
    ],
    "13": [
      "출 25",
      "요 4",
      "잠 1",
      "고후 13"
    ],
    "14": [
      "출 26",
      "요 5",
      "잠 2",
      "갈 1"
    ],
    "15": [
      "출 27",
      "요 6",
      "잠 3",
      "갈 2"
    ],
    "16": [
      "출 28",
      "요 7",
      "잠 4",
      "갈 3"
    ],
    "17": [
      "출 29",
      "요 8",
      "잠 5",
      "갈 4"
    ],
    "18": [
      "출 30",
      "요 9",
      "잠 6",
      "갈 5"
    ],
    "19": [
      "출 31",
      "요 10",
      "잠 7",
      "갈 6"
    ],
    "20": [
      "출 32",
      "요 11",
      "잠 8",
      "엡 1"
    ],
    "21": [
      "출 33",
      "요 12",
      "잠 9",
      "엡 2"
    ],
    "22": [
      "출 34",
      "요 13",
      "잠 10",
      "엡 3"
    ],
    "23": [
      "출 35",
      "요 14",
      "잠 11",
      "엡 4"
    ],
    "24": [
      "출 36",
      "요 15",
      "잠 12",
      "엡 5"
    ],
    "25": [
      "출 37",
      "요 16",
      "잠 13",
      "엡 6"
    ],
    "26": [
      "출 38",
      "요 17",
      "잠 14",
      "빌 1"
    ],
    "27": [
      "출 39",
      "요 18",
      "잠 15",
      "빌 2"
    ],
    "28": [
      "출 40",
      "요 19",
      "잠 16",
      "빌 3"
    ],
    "29": [
      "레 1",
      "요 20",
      "잠 17",
      "빌 4"
    ],
    "30": [
      "레 2,레 3",
      "요 21",
      "잠 18",
      "골로세서1"
    ]
  },
  "4": {
    "0": [
      "레 4",
      "시 1,시 2",
      "잠 19",
      "골 2"
    ],
    "1": [
      "레 5",
      "시 3,시 4",
      "잠 20",
      "골 3"
    ],
    "2": [
      "레 6",
      "시 5,시 6",
      "잠 21",
      "골 4"
    ],
    "3": [
      "레 7",
      "시 7,시 8",
      "잠 22",
      "살전 1"
    ],
    "4": [
      "레 8",
      "시 9",
      "잠 23",
      "살전 2"
    ],
    "5": [
      "레 9",
      "시 10",
      "잠 24",
      "살전 3"
    ],
    "6": [
      "레 10",
      "시 11,시 12",
      "잠 25",
      "살전 4"
    ],
    "7": [
      "레 11,레 12",
      "시 13,시 14",
      "잠 26",
      "살전 5"
    ],
    "8": [
      "레 13",
      "시 15,시 16",
      "잠 27",
      "살후 1"
    ],
    "9": [
      "레 14",
      "시 17",
      "잠 28",
      "살후 2"
    ],
    "10": [
      "레 15",
      "시 18",
      "잠 29",
      "살후 3"
    ],
    "11": [
      "레 16",
      "시 19",
      "잠 30",
      "딤전 1"
    ],
    "12": [
      "레 17",
      "시 20,시 21",
      "잠 31",
      "딤전 2"
    ],
    "13": [
      "레 18",
      "시 22",
      "전 1",
      "딤전 3"
    ],
    "14": [
      "레 19",
      "시 23,시 24",
      "전 2",
      "딤전 4"
    ],
    "15": [
      "레 20",
      "시 25",
      "전 3",
      "딤전 5"
    ],
    "16": [
      "레 21",
      "시 26,시 27",
      "전 4",
      "딤전 6"
    ],
    "17": [
      "레 22",
      "시 28,시 29",
      "전 5",
      "딤후 1"
    ],
    "18": [
      "레 23",
      "시 30",
      "전 6",
      "딤후 2"
    ],
    "19": [
      "레 24",
      "시 31",
      "전 7",
      "딤후 3"
    ],
    "20": [
      "레 25",
      "시 32",
      "전 8",
      "딤후 4"
    ],
    "21": [
      "레 26",
      "시 33",
      "전 9",
      "딛 1"
    ],
    "22": [
      "레 27",
      "시 34",
      "전 10",
      "딛 2"
    ],
    "23": [
      "민 1",
      "시 35",
      "전 11",
      "딛 3"
    ],
    "24": [
      "민 2",
      "시 36",
      "전 12",
      "몬 1"
    ],
    "25": [
      "민 3",
      "시 37",
      "아 1",
      "히 1"
    ],
    "26": [
      "민 4",
      "시 38",
      "아 2",
      "히 2"
    ],
    "27": [
      "민 5",
      "시 39",
      "아 3",
      "히 3"
    ],
    "28": [
      "민 6",
      "시 40,시 41",
      "아 4",
      "히 4"
    ],
    "29": [
      "민 7",
      "시 42,시 43",
      "아 5",
      "히 5"
    ]
  },
  "5": {
    "0": [
      "민 8",
      "시 44",
      "아 6",
      "히 6"
    ],
    "1": [
      "민 9",
      "시 45",
      "아 7",
      "히 7"
    ],
    "2": [
      "민 10",
      "시 46,시 47",
      "아 8",
      "히 8"
    ],
    "3": [
      "민 11",
      "시 48",
      "사 1",
      "히 9"
    ],
    "4": [
      "민 12,민 13",
      "시 49",
      "사 2",
      "히 10"
    ],
    "5": [
      "민 14",
      "시 50",
      "사 3,사 4",
      "히 11"
    ],
    "6": [
      "민 15",
      "시 51",
      "사 5",
      "히 12"
    ],
    "7": [
      "민 16",
      "시 52,시 53,시 54",
      "사 6",
      "히 13"
    ],
    "8": [
      "민 17,민 18",
      "시 55",
      "사 7",
      "약 1"
    ],
    "9": [
      "민 19",
      "시 56,시 57",
      "사 8,사 9:1~7",
      "약 2"
    ],
    "10": [
      "민 20",
      "시 58,시 59",
      "사 9:8~21,사 10:1~4",
      "약 3"
    ],
    "11": [
      "민 21",
      "시 60,시 61",
      "사 10:5~34",
      "약 4"
    ],
    "12": [
      "민 22",
      "시 62,시 63",
      "사 11,사 12",
      "약 5"
    ],
    "13": [
      "민 23",
      "시 64,시 65",
      "사 13",
      "벧전 1"
    ],
    "14": [
      "민 24",
      "시 66,시 67",
      "사 14",
      "벧전 2"
    ],
    "15": [
      "민 25",
      "시 68",
      "사 15",
      "벧전 3"
    ],
    "16": [
      "민 26",
      "시 69",
      "사 16",
      "벧전 4"
    ],
    "17": [
      "민 27",
      "시 70,시 71",
      "사 17,사 18",
      "벧전 5"
    ],
    "18": [
      "민 28",
      "시 72",
      "사 19,사 120",
      "벧후 1"
    ],
    "19": [
      "민 29",
      "시 73",
      "사 21",
      "벧후 2"
    ],
    "20": [
      "민 30",
      "시 74",
      "사 22",
      "벧후 3"
    ],
    "21": [
      "민 31",
      "시 75,시 76",
      "사 23",
      "요일 1"
    ],
    "22": [
      "민 32",
      "시 77",
      "사 24",
      "요일 2"
    ],
    "23": [
      "민 33",
      "시 78:1~37",
      "사 25",
      "요일 3"
    ],
    "24": [
      "민 34",
      "시 78:38~72",
      "사 26",
      "요일 4"
    ],
    "25": [
      "민 35",
      "시 79",
      "사 27",
      "요일 5"
    ],
    "26": [
      "민 36",
      "시 80",
      "사 28",
      "요이 1"
    ],
    "27": [
      "신 1",
      "시 81,시 82",
      "사 29",
      "요삼 1"
    ],
    "28": [
      "신 2",
      "시 83,시 84",
      "사 30",
      "유 1"
    ],
    "29": [
      "신 3",
      "시 85",
      "사 31",
      "계 1"
    ],
    "30": [
      "신 4",
      "시 86,시 87",
      "사 32",
      "계 2"
    ]
  },
  "6": {
    "0": [
      "신 5",
      "시 88",
      "사 33",
      "계 3"
    ],
    "1": [
      "신 6",
      "시 89",
      "사 34",
      "계 4"
    ],
    "2": [
      "신 7",
      "시 90",
      "사 35",
      "계 5"
    ],
    "3": [
      "신 8",
      "시 91",
      "사 36",
      "계 6"
    ],
    "4": [
      "신 9",
      "시 92,시 93",
      "사 37",
      "계 7"
    ],
    "5": [
      "신 10",
      "시 94",
      "사 38",
      "계 8"
    ],
    "6": [
      "신 11",
      "시 95,시 96",
      "사 39",
      "계 9"
    ],
    "7": [
      "신 12",
      "시 97,시 98",
      "사 40",
      "계 10"
    ],
    "8": [
      "신 13,신 14",
      "시 99,시 100,시 101",
      "사 41",
      "계 11"
    ],
    "9": [
      "신 15",
      "시 102",
      "사 42",
      "계 12"
    ],
    "10": [
      "신 16",
      "시 103",
      "사 43",
      "계 13"
    ],
    "11": [
      "신 17",
      "시 104",
      "사 44",
      "계 14"
    ],
    "12": [
      "신 18",
      "시 105",
      "사 45",
      "계 15"
    ],
    "13": [
      "신 19",
      "시 106",
      "사 46",
      "계 16"
    ],
    "14": [
      "신 20",
      "시 107",
      "사 47",
      "계 17"
    ],
    "15": [
      "신 21",
      "시 108,시 109",
      "사 48",
      "계 18"
    ],
    "16": [
      "신 22",
      "시 110,시 111",
      "사 49",
      "계 19"
    ],
    "17": [
      "신 23",
      "시 112,시 113",
      "사 50",
      "계 20"
    ],
    "18": [
      "신 24",
      "시 114,시 115",
      "사 51",
      "계 21"
    ],
    "19": [
      "신 25",
      "시 116",
      "사 52",
      "계 22"
    ],
    "20": [
      "신 26",
      "시 117,시 118",
      "사 53",
      "마 1"
    ],
    "21": [
      "신 27,신 28:1~19",
      "시 119:1~24",
      "사 54",
      "마 2"
    ],
    "22": [
      "신 28:20~68",
      "시 119:25~48",
      "사 55",
      "마 3"
    ],
    "23": [
      "신 29",
      "시 119:49~72",
      "사 56",
      "마 4"
    ],
    "24": [
      "신 30",
      "시 119:73~96",
      "사 57",
      "마 5"
    ],
    "25": [
      "신 31",
      "시 119:97~120",
      "사 58",
      "마 6"
    ],
    "26": [
      "신 32",
      "시 119:121~144",
      "사 59",
      "마 7"
    ],
    "27": [
      "신 33,신 34",
      "시 119:145~176",
      "사 60",
      "마 8"
    ],
    "28": [
      "수 1",
      "시 120,시 121,시 122",
      "사 61",
      "마 9"
    ],
    "29": [
      "수 2",
      "시 123,시 124,시 125",
      "사 62",
      "마 10"
    ]
  },
  "7": {
    "0": [
      "수 3",
      "시 126,시 127,시 128",
      "사 63",
      "마 11"
    ],
    "1": [
      "수 4",
      "시 129,시 130,시 131",
      "사 64",
      "마 12"
    ],
    "2": [
      "수 5,수 6:1~5",
      "시 132,시 133,시 134",
      "사 65",
      "마 13"
    ],
    "3": [
      "수 6:6~27",
      "시 135,시 136",
      "사 66",
      "마 14"
    ],
    "4": [
      "수 7",
      "시 137,시 138",
      "렘 1",
      "마 15"
    ],
    "5": [
      "수 8",
      "시 139",
      "렘 2",
      "마 16"
    ],
    "6": [
      "수 9",
      "시 140,시 141",
      "렘 3",
      "마 17"
    ],
    "7": [
      "수 10",
      "시 142,시 143",
      "렘 4",
      "마 18"
    ],
    "8": [
      "수 11",
      "시 144",
      "렘 5",
      "마 19"
    ],
    "9": [
      "수 12,수 13",
      "시 145",
      "렘 6",
      "마 20"
    ],
    "10": [
      "수 14,수 15",
      "시 146,시 147",
      "렘 7",
      "마 21"
    ],
    "11": [
      "수 16,수 17",
      "시 148",
      "렘 8",
      "마 22"
    ],
    "12": [
      "수 18,수 19",
      "시 149,시 150",
      "렘 9",
      "마 23"
    ],
    "13": [
      "수 20,수 21",
      "행 1",
      "렘 10",
      "마 24"
    ],
    "14": [
      "수 22",
      "행 2",
      "렘 11",
      "마 25"
    ],
    "15": [
      "수 23",
      "행 3",
      "렘 12",
      "마 26"
    ],
    "16": [
      "수 24",
      "행 4",
      "렘 13",
      "마 27"
    ],
    "17": [
      "삿 1",
      "행 5",
      "렘 14",
      "마 28"
    ],
    "18": [
      "삿 2",
      "행 6",
      "렘 15",
      "막 1"
    ],
    "19": [
      "삿 3",
      "행 7",
      "렘 16",
      "막 2"
    ],
    "20": [
      "삿 4",
      "행 8",
      "렘 17",
      "막 3"
    ],
    "21": [
      "삿 5",
      "행 9",
      "렘 18",
      "막 4"
    ],
    "22": [
      "삿 6",
      "행 10",
      "렘 19",
      "막 5"
    ],
    "23": [
      "삿 7",
      "행 11",
      "렘 20",
      "막 6"
    ],
    "24": [
      "삿 8",
      "행 12",
      "렘 21",
      "막 7"
    ],
    "25": [
      "삿 9",
      "행 13",
      "렘 22",
      "막 8"
    ],
    "26": [
      "삿 10,삿 11:1~11",
      "행 14",
      "렘 23",
      "막 9"
    ],
    "27": [
      "삿 11:12~40",
      "행 15",
      "렘 24",
      "막 10"
    ],
    "28": [
      "삿 12",
      "행 16",
      "렘 25",
      "막 11"
    ],
    "29": [
      "삿 13",
      "행 17",
      "렘 26",
      "막 12"
    ],
    "30": [
      "삿 14",
      "행 18",
      "렘 27",
      "막 13"
    ]
  },
  "8": {
    "0": [
      "삿 15",
      "행 19",
      "렘 28",
      "막 14"
    ],
    "1": [
      "삿 16",
      "행 20",
      "렘 29",
      "막 15"
    ],
    "2": [
      "삿 17",
      "행 21",
      "렘 30,렘 31",
      "막 16"
    ],
    "3": [
      "삿 18",
      "행 22",
      "렘 32",
      "시 1,시 2"
    ],
    "4": [
      "삿 19",
      "행 23",
      "렘 33",
      "시 3,시 4"
    ],
    "5": [
      "삿 20",
      "행 24",
      "렘 34",
      "시 5,시 6"
    ],
    "6": [
      "삿 21",
      "행 25",
      "렘 35",
      "시 7,시 8"
    ],
    "7": [
      "룻 1",
      "행 26",
      "렘 36,렘 37",
      "시 9"
    ],
    "8": [
      "룻 2",
      "행 27",
      "렘 38",
      "시 10"
    ],
    "9": [
      "룻 3,룻 4",
      "행 28",
      "렘 39",
      "시 11,시 12"
    ],
    "10": [
      "삼상 1",
      "롬 1",
      "렘 40",
      "시 13,시 14"
    ],
    "11": [
      "삼상 2",
      "롬 2",
      "렘 41",
      "시 15,시 16"
    ],
    "12": [
      "삼상 3",
      "롬 3",
      "렘 42",
      "시 17"
    ],
    "13": [
      "삼상 4",
      "롬 4",
      "렘 43",
      "시 18"
    ],
    "14": [
      "삼상 5,삼상 6",
      "롬 5",
      "렘 44",
      "시 19"
    ],
    "15": [
      "삼상 7,삼상 8",
      "롬 6",
      "렘 45",
      "시 20,시 21"
    ],
    "16": [
      "삼상 9",
      "롬 7",
      "렘 46",
      "시 22"
    ],
    "17": [
      "삼상 10",
      "롬 8",
      "렘 47",
      "시 23,시 24"
    ],
    "18": [
      "삼상 11",
      "롬 9",
      "렘 48",
      "시 25"
    ],
    "19": [
      "삼상 12",
      "롬 10",
      "렘 49",
      "시 26,시 27"
    ],
    "20": [
      "삼상 13",
      "롬 11",
      "렘 50",
      "시 28,29"
    ],
    "21": [
      "삼상 14",
      "롬 12",
      "렘 51",
      "시 30"
    ],
    "22": [
      "삼상 15",
      "롬 13",
      "렘 52",
      "시 31"
    ],
    "23": [
      "삼상 16",
      "롬 14",
      "애 1",
      "시 32"
    ],
    "24": [
      "삼상 17",
      "롬 15",
      "애 2",
      "시 33"
    ],
    "25": [
      "삼상 18",
      "롬 16",
      "애 3",
      "시 34"
    ],
    "26": [
      "삼상 19",
      "고전 1",
      "애 4",
      "시 35"
    ],
    "27": [
      "삼상 20",
      "고전 2",
      "애 5",
      "시 36"
    ],
    "28": [
      "삼상 21,삼상 22",
      "고전 3",
      "겔 1",
      "시 37"
    ],
    "29": [
      "삼상 23",
      "고전 4",
      "겔 2",
      "시 38"
    ],
    "30": [
      "삼상 24",
      "고전 5",
      "겔 3",
      "시 39"
    ]
  },
  "9": {
    "0": [
      "삼상 25",
      "고전 6",
      "겔 4",
      "시 40,시 41"
    ],
    "1": [
      "삼상 26",
      "고전 7",
      "겔 5",
      "시 42,시 43"
    ],
    "2": [
      "삼상 27",
      "고전 8",
      "겔 6",
      "시 44"
    ],
    "3": [
      "삼상 28",
      "고전 9",
      "겔 7",
      "시 45"
    ],
    "4": [
      "삼상 29,삼상 30",
      "고전 10",
      "겔 8",
      "시 46,시 47"
    ],
    "5": [
      "삼상 31",
      "고전 11",
      "겔 9",
      "시 48"
    ],
    "6": [
      "삼하 1",
      "고전 12",
      "겔 10",
      "시 49"
    ],
    "7": [
      "삼하 2",
      "고전 13",
      "겔 11",
      "시 50"
    ],
    "8": [
      "삼하 3",
      "고전 14",
      "겔 12",
      "시 51"
    ],
    "9": [
      "삼하 4,삼하 5",
      "고전 15",
      "겔 13",
      "시 52,시 53,시 54"
    ],
    "10": [
      "삼하 6",
      "고전 16",
      "겔 14",
      "시 55"
    ],
    "11": [
      "삼하 7",
      "고후 1",
      "겔 15",
      "시 56,시 57"
    ],
    "12": [
      "삼하 8,삼하 9",
      "고후 2",
      "겔 16",
      "시 58,시 59"
    ],
    "13": [
      "삼하 10",
      "고후 3",
      "겔 17",
      "시 60,시 61"
    ],
    "14": [
      "삼하 11",
      "고후 4",
      "겔 18",
      "시 62,시 63"
    ],
    "15": [
      "삼하 12",
      "고후 5",
      "겔 19",
      "시 64,시 65"
    ],
    "16": [
      "삼하 13",
      "고후 6",
      "겔 20",
      "시 66,시 67"
    ],
    "17": [
      "삼하 14",
      "고후 7",
      "겔 21",
      "시 68"
    ],
    "18": [
      "삼하 15",
      "고후 8",
      "겔 22",
      "시 69"
    ],
    "19": [
      "삼하 16",
      "고후 9",
      "겔 23",
      "시 70,시 71"
    ],
    "20": [
      "삼하 17",
      "고후 10",
      "겔 24",
      "시 72"
    ],
    "21": [
      "삼하 18",
      "고후 11",
      "겔 25",
      "시 73"
    ],
    "22": [
      "삼하 19",
      "고후 12",
      "겔 26",
      "시 74"
    ],
    "23": [
      "삼하 20",
      "고후 13",
      "겔 27",
      "시 75,시 76"
    ],
    "24": [
      "삼하 21",
      "갈 1",
      "겔 28",
      "시 77"
    ],
    "25": [
      "삼하 22",
      "갈 2",
      "겔 29",
      "시 78:1~37"
    ],
    "26": [
      "삼하 23",
      "갈 3",
      "겔 30",
      "시 78:38~72"
    ],
    "27": [
      "삼하 24",
      "갈 4",
      "겔 31",
      "시 79"
    ],
    "28": [
      "왕상 1",
      "갈 5",
      "겔 32",
      "시 80"
    ],
    "29": [
      "왕상 2",
      "갈 6",
      "겔 33",
      "시 81,시 82"
    ]
  },
  "10": {
    "0": [
      "왕상 3",
      "엡 1",
      "겔 34",
      "시 83,시 84"
    ],
    "1": [
      "왕상 4,왕상 5",
      "엡 2",
      "겔 35",
      "시 85"
    ],
    "2": [
      "왕상 6",
      "엡 3",
      "겔 36",
      "시 86"
    ],
    "3": [
      "왕상 7",
      "엡 4",
      "겔 37",
      "시 87,시 88"
    ],
    "4": [
      "왕상 8",
      "엡 5",
      "겔 38",
      "시 89"
    ],
    "5": [
      "왕상 9",
      "엡 6",
      "겔 39",
      "시 90"
    ],
    "6": [
      "왕상 10",
      "빌 1",
      "겔 40",
      "시 91"
    ],
    "7": [
      "왕상 11",
      "빌 2",
      "겔 41",
      "시 92,시 93"
    ],
    "8": [
      "왕상 12",
      "빌 3",
      "겔 42",
      "시 94"
    ],
    "9": [
      "왕상 13",
      "빌 4",
      "겔 43",
      "시 95,시 96"
    ],
    "10": [
      "왕상 14",
      "골 1",
      "겔 44",
      "시 97,시 98"
    ],
    "11": [
      "왕상 15",
      "골 2",
      "겔 45",
      "시 99,시 100,시 101"
    ],
    "12": [
      "왕상 16",
      "골 3",
      "겔 46",
      "시 102"
    ],
    "13": [
      "왕상 17",
      "골 4",
      "겔 47",
      "시 103"
    ],
    "14": [
      "왕상 18",
      "살전 1",
      "겔 48",
      "시 104"
    ],
    "15": [
      "왕상 19",
      "살전 2",
      "단 1",
      "시 105"
    ],
    "16": [
      "왕상 20",
      "살전 3",
      "단 2",
      "시 106"
    ],
    "17": [
      "왕상 21",
      "살전 4",
      "단 3",
      "시 107"
    ],
    "18": [
      "왕상 22",
      "살전 5",
      "단 4",
      "시 108,시 109"
    ],
    "19": [
      "왕하 1",
      "살후 1",
      "단 5",
      "시 110,시 111"
    ],
    "20": [
      "왕하 2",
      "살후 2",
      "단 6",
      "시 112,시 113"
    ],
    "21": [
      "왕하 3",
      "살후 3",
      "단 7",
      "시 114,시 115"
    ],
    "22": [
      "왕하 4",
      "딤전 1",
      "단 8",
      "시 116"
    ],
    "23": [
      "왕하 5",
      "딤전 2",
      "단 9",
      "시 117,시 118"
    ],
    "24": [
      "왕하 6",
      "딤전 3",
      "단 10",
      "시 119:1~24"
    ],
    "25": [
      "왕하 7",
      "딤전 4",
      "단 11",
      "시 119:25~48"
    ],
    "26": [
      "왕하 8",
      "딤전 5",
      "단 12",
      "시 119:49~72"
    ],
    "27": [
      "왕하 9",
      "딤전 6",
      "호 1",
      "시 119:73~96"
    ],
    "28": [
      "왕하 10",
      "딤후 1",
      "호 2",
      "시 119:97~120"
    ],
    "29": [
      "왕하 11,왕하 12",
      "딤후 2",
      "호 3,호 4",
      "시 119:121~144"
    ],
    "30": [
      "왕하 13",
      "딤후 3",
      "호 5,호 6",
      "시 119:145~176"
    ]
  },
  "11": {
    "0": [
      "왕하 14",
      "딤후 4",
      "호 7",
      "시 120,시 121,시 122"
    ],
    "1": [
      "왕하 15",
      "딛 1",
      "호 8",
      "시 123,시 124,시 125"
    ],
    "2": [
      "왕하 16",
      "딛 2",
      "호 9",
      "시 126,시 127,시 128"
    ],
    "3": [
      "왕하 17",
      "딛 3",
      "호 10",
      "시 129,시 130,시 131"
    ],
    "4": [
      "왕하 18",
      "몬 1",
      "호 11",
      "시 132,시 133,시 134"
    ],
    "5": [
      "왕하 19",
      "히 1",
      "호 12",
      "시 135,시 136"
    ],
    "6": [
      "왕하 20",
      "히 2",
      "호 13",
      "시 137,시 138"
    ],
    "7": [
      "왕하 21",
      "히 3",
      "호 14",
      "시 139"
    ],
    "8": [
      "왕하 22",
      "히 4",
      "욜 1",
      "시 140,시 141"
    ],
    "9": [
      "왕하 23",
      "히 5",
      "욜 2",
      "시 142"
    ],
    "10": [
      "왕하 24",
      "히 6",
      "욜 3",
      "시 143"
    ],
    "11": [
      "왕하 25",
      "히 7",
      "암 1",
      "시 144"
    ],
    "12": [
      "대상 1,대상 2",
      "히 8",
      "암 2",
      "시 145"
    ],
    "13": [
      "대상 3,대상 4",
      "히 9",
      "암 3",
      "시 146,시 147"
    ],
    "14": [
      "대상 5,대상 6",
      "히 10",
      "암 4",
      "시 148,시 149,시 150"
    ],
    "15": [
      "대상 7,대상 8",
      "히 11",
      "암 5",
      "눅 1:1~38"
    ],
    "16": [
      "대상 9,대상 10",
      "히 12",
      "암 6",
      "눅 1:39~80"
    ],
    "17": [
      "대상 11,대상 12",
      "히 13",
      "암 7",
      "눅 2"
    ],
    "18": [
      "대상 13,대상 14",
      "약 1",
      "암 8",
      "눅 3"
    ],
    "19": [
      "대상 15",
      "약 2",
      "암 9",
      "눅 4"
    ],
    "20": [
      "대상 16",
      "약 3",
      "옵 1",
      "눅 5"
    ],
    "21": [
      "대상 17",
      "약 4",
      "욘 1",
      "눅 6"
    ],
    "22": [
      "대상 18",
      "약 5",
      "욘 2",
      "눅 7"
    ],
    "23": [
      "대상 19,대상 20",
      "벧전 1",
      "욘 3",
      "눅 8"
    ],
    "24": [
      "대상 21",
      "벧전 2",
      "욘 4",
      "눅 9"
    ],
    "25": [
      "대상 22",
      "벧전 3",
      "미 1",
      "눅 10"
    ],
    "26": [
      "대상 23",
      "벧전 4",
      "미 2",
      "눅 11"
    ],
    "27": [
      "대상 24,대상 25",
      "벧전 5",
      "미 3",
      "눅 12"
    ],
    "28": [
      "대상 26,대상 27",
      "벧후 1",
      "미 4",
      "눅 13"
    ],
    "29": [
      "대상 28",
      "벧후 2",
      "미 5",
      "눅 14"
    ]
  },
  "12": {
    "0": [
      "대상 29",
      "벧후 3",
      "미 6",
      "눅 15"
    ],
    "1": [
      "대하 1",
      "요일 1",
      "미 7",
      "눅 16"
    ],
    "2": [
      "대하 2",
      "요일 2",
      "나 1",
      "눅 17"
    ],
    "3": [
      "대하 3,대하 4",
      "요일 3",
      "나 2",
      "눅 18"
    ],
    "4": [
      "대하 5,대하 6:1~11",
      "요일 4",
      "나 3",
      "눅 19"
    ],
    "5": [
      "대하 6:12~42",
      "요일 5",
      "합 1",
      "눅 20"
    ],
    "6": [
      "대하 7",
      "요이 1",
      "합 2",
      "눅 21"
    ],
    "7": [
      "대하 8",
      "요삼 1",
      "합 3",
      "눅 22"
    ],
    "8": [
      "대하 9",
      "유 1",
      "습 1",
      "눅 23"
    ],
    "9": [
      "대하 10",
      "계 1",
      "습 2",
      "눅 24"
    ],
    "10": [
      "대하 11,대하 12",
      "계 2",
      "습 3",
      "요 1"
    ],
    "11": [
      "대하 13",
      "계 3",
      "학 1",
      "요 2"
    ],
    "12": [
      "대하 14,대하 15",
      "계 4",
      "학 2",
      "요 3"
    ],
    "13": [
      "대하 16",
      "계 5",
      "슥 1",
      "요 4"
    ],
    "14": [
      "대하 17",
      "계 6",
      "슥 2",
      "요 5"
    ],
    "15": [
      "대하 18",
      "계 7",
      "슥 3",
      "요 6"
    ],
    "16": [
      "대하 19,대하 20",
      "계 8",
      "슥 4",
      "요 7"
    ],
    "17": [
      "대하 21",
      "계 9",
      "슥 5",
      "요 8"
    ],
    "18": [
      "대하 22,대하 23",
      "계 10",
      "슥 6",
      "요 9"
    ],
    "19": [
      "대하 24",
      "계 11",
      "슥 7",
      "요 10"
    ],
    "20": [
      "대하 25",
      "계 12",
      "슥 8",
      "요 11"
    ],
    "21": [
      "대하 26",
      "계 13",
      "슥 9",
      "요 12"
    ],
    "22": [
      "대하 27,대하 28",
      "계 14",
      "슥 10",
      "요 13"
    ],
    "23": [
      "대하 29",
      "계 15",
      "슥 11",
      "요 14"
    ],
    "24": [
      "대하 30",
      "계 16",
      "슥 12,슥 13:1~1",
      "요 15"
    ],
    "25": [
      "대하 31",
      "계 17",
      "슥 13:2~9",
      "요 16"
    ],
    "26": [
      "대하 32",
      "계 18",
      "슥 14",
      "요 17"
    ],
    "27": [
      "대하 33",
      "계 19",
      "말 1",
      "요 18"
    ],
    "28": [
      "대하 34",
      "계 20",
      "말 2",
      "요 19"
    ],
    "29": [
      "대하 35",
      "계 21",
      "말 3",
      "요 20"
    ],
    "30": [
      "대하 36",
      "계 22",
      "말 4",
      "요 21"
    ]
  }
}
interface IBible {
  [key: string]: string
}
const bibleDiction: IBible = {
  "창": "창세기",
  "출": "출애굽기",
  "레": "레위기",
  "민": "민수기",
  "신": "신명기",
  "수": "여호수아",
  "삿": "사사기",
  "룻": "룻기",
  "삼상": "사무엘상",
  "삼하": "사무엘하",
  "왕상": "열왕기상",
  "왕하": "열왕기하",
  "대상": "역대상",
  "대하": "역대하",
  "스": "에스라",
  "느": "느헤미야",
  "에": "에스더",
  "욥": "욥기",
  "시": "시편",
  "잠": "잠언",
  "전": "전도서",
  "아": "아가",
  "사": "이사야",
  "렘": "예레미야",
  "애": "예레미야애가",
  "겔": "에스겔",
  "단": "다니엘",
  "호": "호세아",
  "욜": "요엘",
  "암": "아모스",
  "옵": "오바댜",
  "욘": "요나",
  "미": "미가",
  "나": "나훔",
  "합": "하박국",
  "습": "스바냐",
  "학": "학개",
  "슥": "스가랴",
  "말": "말라기",
  "마": "마태복음",
  "막": "마가복음",
  "눅": "누가복음",
  "요": "요한복음",
  "행": "사도행전",
  "롬": "로마서",
  "고전": "고린도전서",
  "고후": "고린도후서",
  "갈": "갈라디아서",
  "엡": "에배소서",
  "빌": "빌립보서",
  "골": "골로새서",
  "살전": "데살로니가전서",
  "살후": "데살로니가후서",
  "딤전": "디모데전서",
  "딤후": "디모데후서",
  "딛": "디도서",
  "몬": "빌레몬서",
  "히": "히브리서",
  "약": "야고보서",
  "벧전": "베드로전서",
  "벧후": "베드로후서",
  "요일": "요한1서",
  "요1": "요한1서",
  "요이": "요한2서",
  "요2": "요한2서",
  "요삼": "요한3서",
  "요3": "요한3서",
  "유": "유다서",
  "계": "요한계시록",
}

const page = () => {
  const [select, setSelect] = useState('family')
  const today = new Date()

  const [date, setDate] = useState(today)

  const month = date.getMonth()
  const day = date.getDate()

  const addDay = (add: number) => {
    const next = new Date(date)
    next.setDate(next.getDate() + add);
    setDate(next)
  }
  return (
    <Container className='my-12'>
      <div className='flex justify-between flex-col md:flex-row text-center md:text-left'>
        <div className='text-xl'>
          맥체인 성경표 읽기
        </div>
        <div className='flex gap-4 items-center justify-center'>
          <button onClick={() => addDay(-1)} className='rounded-full border-[1px] px-3 py-2 text-xs'>&lt;</button>
          {month + 1}월 {day}일
          <button onClick={() => addDay(1)} className='rounded-full border-[1px] px-3 py-2 text-xs'>&gt;</button>
        </div>
      </div>
      <div className='grid grid-cols-2'>
        <div className={clsx('text-center cursor-pointer', select === 'family' ? 'underline pb-2' : '')} onClick={() => setSelect('family')}>가정</div>
        <div className={clsx('text-center cursor-pointer', select === 'person' ? 'underline' : '')} onClick={() => setSelect('person')}>개인</div>
      </div>
      <MainView select={select} month={month} day={day} />
    </Container>
  )
}
const MainView = ({ select, month, day }: { select: string, month: number, day: number }) => {
  if (month === 1 && day === 29) return <div className='my-12'>윤년</div>
  const [f1, f2, p1, p2] = macBible[(month + 1).toString()][(day - 1).toString()]
  return (
    <>
      <span
        className={clsx(
          ' block font-display tracking-tight [text-wrap:balance]',
        )}
      >
        <ViewBible bible={select === 'family' ? f1 : p1} />
        <ViewBible bible={select === 'family' ? f2 : p2} />
      </span>
    </>
  )
}

const ViewBible = ({ bible }: { bible: string }) => {
  const bibles = bible.split(',')
  return (
    <div className='my-4'>
      {bibles.map(bible =>
        <div key={bible}>
          <BibleList bible={bible} />
        </div>
      )}
    </div>

  )
}

type BibleData = Record<string, string>;
const BibleList = ({ bible }: { bible: string }) => {
  const bibleData: BibleData = bibleJson as BibleData
  const [name, page] = bible.split(' ')
  const [장, 절s] = page.split(':')
  function rangeFromString(input: string) {
    const [start, end] = input.split("~").map(Number);
    if (isNaN(start) || isNaN(end) || start > end) {
      throw new Error("Invalid input");
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }
  return (
    <div>
      {!절s ?
        <>
          <div className='text-xl'>{bibleDiction[name]} {page}장</div>
          {/* {Object.entries(bibleJson).filter(([key, value]) => key.startsWith(`${name}${장}:`))
            .map(([장, 절]) =>
              <BibleInView key={장} 장={장} 절={절} />
            )} */}
        </>
        :
        <div className='w-full'>
          <div className='text-xl '>{bibleDiction[name]} {page}</div>
          {/* {rangeFromString(절s).map(절 =>
            <BibleInView key={절} 장={`${장}:${절}`} 절={bibleData[`${name}${장}:${절}`]} />
          )} */}
        </div>
      }
    </div>
  )
}
const BibleInView = ({ 장, 절 }: { 장: string, 절: string }) => {
  return (
    <div className='w-full flex gap-4 my-1'>
      <div className='w-[80px]'>{장.replace(/[가-힣]/g, '')}</div>
      <div className='break-keep w-full'>{절}</div>
    </div>
  )
}


export default page