const express = require("express");
const { loginADMIN, addAdminPosts } = require("../controllers/adminController");
const { addLinks, getAllLinks, DeleteSpecLink, UpdateSpecLink } = require("../controllers/linkController");
const { addPosts, getposts, loginUSER } = require("../controllers/usersController");
const { authroles } = require("../middleware/rolebasedauth");
const { adminroles, userroles } = require("../src/constants/roles");


const router = express.Router();

router.post('/addposts',addPosts);
router.get('/getposts',getposts);
router.get('/alllinks',getAllLinks);
router.post('/asthalogin',authroles(adminroles),loginADMIN);
router.post('/loginuser',authroles(userroles),loginUSER);
router.post('/addadminposts',addAdminPosts);
router.post('/links',addLinks);
router.delete('/alllinks/:id',DeleteSpecLink);
router.put('/alllinks/:id',UpdateSpecLink);

module.exports = router;


