export const getAllReviewbook = 'select * from `reviewbook`';
export const getAllReviewsubject = 'select * from `reviewsubject`';
export const getAllReviewtutor = 'select * from `reviewtutor`';
export const getAllShareevent = 'select * from `shareevent`';
export const getAllSharenote = 'select * from `sharenote`';
export const getReviewbook = 'select * from `reviewbook` where ReviewBookID = ?';
export const getReviewsubject = 'select * from `reviewsubject` where ReviewSubjectID = ?';
export const getReviewtutor = 'select * from `reviewtutor` where Reviewtutor = ?';
export const getShareevent = 'select * from `shareevent` where ShareEventID = ?';
export const getSharenote = 'select * from `sharenote` where ShareNoteID = ?';
export const getContentReviewBook = 'SELECT * FROM `picture` WHERE ReviewBookID = ?';
export const getContentReviewSubject = 'SELECT * FROM `picture` WHERE ReviewSubjectID = ?';
export const getContentReviewTutor = 'SELECT * FROM `picture` WHERE Reviewtutor = ?';
export const getContentShareEvent = 'SELECT * FROM `picture` WHERE ShareEventID = ?';
export const getContentShareNote = 'SELECT * FROM `picture` WHERE ShareNoteID = ?';