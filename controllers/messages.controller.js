function getMessages(req, res) {
    res.render("messages", {
        title: "message to my friend",
        friend: "mohammad reza",
    });
}

function postMessages(req, res) {
    res.send({
        name: "test message",
        method: "post",
    });
}

module.exports = {
    getMessages,
    postMessages,
};
