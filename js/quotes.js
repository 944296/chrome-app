const quotes = [
    {
     quote: "성공의 비결은 단 한 가지,잘할 수 있는 일에 광적으로 집중하는 것이다",
     author: "톰 모나건",
    },
    {
     quote: "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다",
     author: "단테",
    },
    {
     quote: "하루에 3시간을 걸으면 7년 후에 지구를 한 바퀴 돌 수 있다",
     author: "사무엘 존슨",
    },
    {
     quote: "진정으로 웃으려면 고통을 참아야 하며 나아가 고통을 즐길 줄 알아야 한다", 
     author: "찰리 채플린",
    },
    {
     quote: "먼저 자신을 비웃어라 다른 사람이 당신을 비웃기 전에",
     author: "엘사 맥스웰",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;