router.get("/notes", function (req, res) {
    store
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

router.post("/notes", function (req, res) {
    store
        .addNotes()
        .then((notes) => res.json(note))
        .catch(err => res.status(500).json(err));
});

router.delete("/notes/:id", function (req, res) {
    store
        .removeNotes()
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});

module.exports = router;
