const express = require('express');
const emoticonPOST = require('../../controllers/emoticon/emoticonPOST');
const emoticonDELETE = require('../../controllers/emoticon/emoticonDELETE');
const router = express.Router();

router.post('/:cHistoryID', emoticonPOST); // 공감하기(좋아요/ 싫어요)
router.delete('/:cHistoryID', emoticonDELETE); // 공감 취소하기
module.exports = router;