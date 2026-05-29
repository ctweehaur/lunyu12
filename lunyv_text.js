/**
 * 互动古文教学平台 - 《论语·十二章》原文核心词解动态数据包 (精简白话规范版)
 */

const poemData = {
    chapter_1: [
        // 子曰：“学而时习之，不亦说乎？
        { text: "子曰", py: "zǐ yuē", zh: "孔子说。子，古代对男子的尊称，这里特指孔子。", en: "The Master said" },
        { text: "：", punc: true },
        { text: "“", punc: true },
        { text: "学", py: "xue", zh: "学习、研究文学与做人的道理。", en: "To learn / study" },
        { text: "而", py: "ér", zh: "连词，表示顺承，相当于‘然后’或‘并且’。", en: "and then" },
        { text: "时", py: "shí", zh: "名词作状语，按时、经常、在适当的时候。", en: "at constant times / regularly", exam: true },
        { text: "习", py: "xí", zh: "实习、温习、复习、实践。指将学到的知识落实到行动中。", en: "to practice / review", exam: true },
        { text: "之", py: "zhī", zh: "代词，代指学过的知识或道理。", en: "it (what has been learned)" },
        { text: "，", punc: true },
        { text: "不", py: "bú", zh: "根据新马教学变调标准，在此处读第二声。与后面的‘亦……乎’连用，构成反问句。", en: "not" },
        { text: "亦", py: "yì", zh: "副词，也、不也是。", en: "also" },
        { text: "说", py: "yuè", zh: "通假字，通‘悦’，意思是愉快、高兴。", en: "pleased / delighted (interchangeable with 悦)", exam: true },
        { text: "乎", py: "hū", zh: "助词，表反问语气，相当于‘吗’。", en: "isn't it?" },
        { text: "？", punc: true },

        // 有朋自远方来，不亦乐乎？
        { text: "有", py: "yǒu", zh: "有、存在。", en: "To have" },
        { text: "朋", py: "péng", zh: "志同道合的人。这里指有共同理想与追求的朋友、弟子。", en: "friends / like-minded people", exam: true },
        { text: "自", py: "zì", zh: "介词，从、由。", en: "from" },
        { text: "远方", py: "yuǎn fāng", zh: "远方：遥远的地方。", en: "afar / distant places" },
        { text: "来", py: "lái", zh: "前来、来到。", en: "to come" },
        { text: "，", punc: true },
        { text: "不", py: "bú", zh: "根据新马教学变调标准，在此处读第二声。", en: "not" },
        { text: "亦", py: "yì", zh: "也。", en: "also" },
        { text: "乐", py: "lè", zh: "快乐、喜悦。", en: "joyful / happy" },
        { text: "乎", py: "hū", zh: "乎：语气助词，表反问。", en: "isn't it?" },
        { text: "？", punc: true },

        // 人不知而不愠，不亦君子乎？”（《学而》）
        { text: "人", py: "rén", zh: "别人、人家。", en: "Others / people" },
        { text: "不知", py: "bù zhī", zh: "别人不了解自己的才华或道德修养。根据新马教学变调标准，后接第一声时保持第四声。", en: "do not understand" },
        { text: "而", py: "ér", zh: "连词，表转折，相当于‘却’、‘可是’。", en: "yet / but", exam: true },
        { text: "不", py: "bú", zh: "没有。", en: "not" },
        { text: "愠", py: "yùn", zh: "生气、发怒、怨恨。这里指内心感到怨恨或不快。", en: "resentful / angry", exam: true },
        { text: "，", punc: true },
        { text: "不", py: "bú", zh: "根据新马教学变调标准，在此处读第二声。", en: "not" },
        { text: "亦", py: "yì", zh: "也。", en: "also" },
        { text: "君子", py: "jūn zǐ", zh: "古代指地位高的人，后来特指道德高尚、学问深厚、有修修养的完美人才。", en: "gentleman / person of noble character", exam: true },
        { text: "乎", py: "hū", zh: "表反问语气助词。", en: "isn't it?" },
        { text: "”", punc: true },
        { text: "（", punc: true },
        { text: "《学而》", py: "xué ér", zh: "本章出自《论语》第一篇《学而篇》。", en: "From the chapter Xue Er" },
        { text: "）", punc: true }
    ]
};

console.log("成功更新：lunyv_text 第一章纯净干练版词解数据");
