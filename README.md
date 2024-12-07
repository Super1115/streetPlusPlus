## <1/>緣起與目的

台灣在2022年被[CNN評論](https://edition.cnn.com/travel/article/taiwan-traffic-war-tourism-intl-hnk/index.html)為「行人地獄」，根據衛生福利部「2023年國人死因統計結果」，台灣2023年因機動車交通事故死亡人數高達2838人，每十萬人死亡人數為12.2，遠高於新加坡（2.1）、日本（2.5）、韓國（6.5)等亞洲鄰國，台灣行人的高死亡率實在令人堪憂。

台灣交通死亡率高、交通事故頻繁，我們認為應該改進交通建設及道路工程，才能根治交通問題。而改善道路工程的第一步，即為參考實際用路人的意見。

「++」在程式裡代表「+1」，我們希望在本專案中，透過科技技術與用路人的力量，讓台灣的人本交通邁入下一階段。

## <2/>使用對象及需求性

在日常生活中，我們時常發現道路存在設計上的瑕疵，須透過改進道路設計才能夠改進。而道路設計人員卻又無直接管道從普通用路人取得意見反饋。本專案恰好媒合普通運路人跟專業道路設計人員的需求，並整合為一個低門檻、方便使用的平台，可以有效解決不同族群的不同需求，顯示出本專案在相關方面的需求性及重要性。

SDGs（聯合國永續發展目標）第11項中寫到 : 

> ”provide access to safe, affordable, accessible and sustainable transport systems for all, improving road safety, notably by expanding public transport, with special attention to the needs of those in vulnerable situations, women, children, persons with disabilities and older persons"
> 

(為所有的人提供安全的、負擔的起、可使用的，以及可永續發展的交通運輸系統，改善道路安全，尤其是擴大公共運輸，特別注意弱勢族群、婦女、兒童、身心障礙者以及老年人的需求)

因此，我們為使所有人，不論年齡、專業能力、或甚至是語言，都能夠方便的使用本專案，在設計時，透過簡化並美化設計降低使用門檻，整個介面也盡量使用圖示代替文字。

我們認為，在設計道路建設問題的「科技解方」時，達到降低使用門檻，才能反映在道路建設的「現實解方」中，並保障所有用路人。

## <3/>相似專案及其當前困境

台灣現有的道路回報系統，例如各縣市1999熱線、[高工局1968專線](https://1968.freeway.gov.tw/)等，皆以解決當下的即時問題為主，而非解決長期的道路設計問題。

目前台灣乃至全世界幾乎沒有相似的專案，性質類似的專案例如Google的[Project Green Light](https://sites.research.google/greenlight/)，其目的也並非針對改善道路建設。

而交通部現有的「[我要通報路口改善](https://road-inform.motc.gov.tw/)」平台，操作對於一般使用者較不友善，且回報平台相對封閉，也難以進行後續分析、處理，或甚至納入更多用路人的意見。

## <4/>功能細部說明與技術

本專案主要提供「回報」與「分析」兩方面的功能。

在本專案中，使用者能以任何語言，回報任何地點的道路問題，僅須登入第三方認證帳戶即可使用，且回報內容不受格式限制，更不須具備相關專業知識。

另外，我們的專案提供類似[Google Map在地嚮導獎勵](https://support.google.com/maps/answer/6225851?hl=en&co=GENIE.Platform%3DAndroid)的獎勵機制，鼓勵使用者回報道路問題。

在分析功能中，本專案將用路人回報資料視覺化，並即時呈現回報數據分布與趨勢。另外，使用者也可以從資量庫頁面，透過簡易的地圖查詢功能，存取用路人的回報資料。我們也將透過API(Application Programming Interface)，將本專案蒐集到的用路人回饋資料共享給其開發者，促進開放資料，並最大化地利用用路人的回報資料。

使用者也可以利用AI功能匡定特定路段，再透過人工智慧（AI, Artificial intelligence）及檢索增強生成(RAG, Retrieval Augmented Generation)技術，在確保資訊高度準確的同時，分析使用者回饋資料，並結合事故資料等開放資料，得到該路段的道路問題及建議的解決方案。

# <5/>Design/Prototype

## Design()

[https://www.figma.com/design/iWLdFzhWJZV0nbvyADVag7/PROJECT11?node-id=0-1&t=KVaE7Tw0u4zzPKq5-1](https://www.figma.com/design/iWLdFzhWJZV0nbvyADVag7/PROJECT11?node-id=0-1&t=KVaE7Tw0u4zzPKq5-1)

## Prototype()

[https://www.figma.com/proto/iWLdFzhWJZV0nbvyADVag7/PROJECT11?node-id=3-25&node-type=canvas&t=xrgvNMKKreRyEilu-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A25](https://www.figma.com/proto/iWLdFzhWJZV0nbvyADVag7/PROJECT11?node-id=3-25&node-type=canvas&t=xrgvNMKKreRyEilu-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A25)

[https://www.figma.com/proto/iWLdFzhWJZV0nbvyADVag7/PROJECT11?node-id=3-25&node-type=canvas&t=xrgvNMKKreRyEilu-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A25](https://www.figma.com/proto/iWLdFzhWJZV0nbvyADVag7/PROJECT11?node-id=3-25&node-type=canvas&t=xrgvNMKKreRyEilu-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A25)
