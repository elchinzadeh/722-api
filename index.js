const express = require('express')
const cors = require('cors')
const data = require('./data')

const app = express()

app.use(cors())

const users = {
    'aytac': { name: 'Aytac Mehtizadə' },
    'cavidan': { name: 'Cavidan Əhmədov' },
    'elmar': { name: 'Elmar Qarayev' },
    'ferid': { name: 'Fərid Səmədli' },
    'gunay': { name: 'Günay Hüseynli' },
    'penah': { name: 'Pənah Kərimov' },
    'rufet': { name: 'Rüfət Səmədov' },
    'yusif': { name: 'Yusif Sərdarlı' }
}

app.get('/', (req, res) => {
    res.send(`
        <h3>With prefix</h3>
        /:user/languages<br/>
        /:user/configuration<br/>
        /:user/profile<br/>
        /:user/workingProcess<br/>
        /:user/skills<br/>
        /:user/technologies<br/>
        /:user/references<br/>
        /:user/projectCategories<br/>
        /:user/projects<br/>
        <hr/>
        <h3>With header</h3>
        /configuration<br/>
        /languages<br/>
        /profile<br/>
        /workingProcess<br/>
        /skills<br/>
        /technologies<br/>
        /references<br/>
        /projectCategories<br/>
        /projects<br/>
    `)
})

app.get('/configuration', (req, res) => {
    const configuration = JSON.parse(JSON.stringify(data.configuration))

    if (users[req.headers.user]) {
        configuration.home.name = users[req.headers.user].name
    }
    res.json(configuration)
})
app.get('/languages', (req, res) => { res.json(data.languages) })
app.get('/profile', (req, res) => { res.json(data.profile) })
app.get('/workingProcess', (req, res) => { res.json(data.workingProcess) })
app.get('/skills', (req, res) => { res.json(data.skills) })
app.get('/technologies', (req, res) => { res.json(data.technologies) })
app.get('/references', (req, res) => { res.json(data.references) })
app.get('/projectCategories', (req, res) => { res.json(data.projectCategories) })
app.get('/projects', (req, res) => { res.json(data.projects) })

app.get('/:user/configuration', (req, res) => {
    const configuration = JSON.parse(JSON.stringify(data.configuration))
    
    if (users[req.params.user]) {
        configuration.home.name = users[req.params.user].name
    }
    res.json(configuration)
})
app.get('/:user/languages', (req, res) => { res.json(data.languages) })
app.get('/:user/profile', (req, res) => { res.json(data.profile) })
app.get('/:user/workingProcess', (req, res) => { res.json(data.workingProcess) })
app.get('/:user/skills', (req, res) => { res.json(data.skills) })
app.get('/:user/technologies', (req, res) => { res.json(data.technologies) })
app.get('/:user/references', (req, res) => { res.json(data.references) })
app.get('/:user/projectCategories', (req, res) => { res.json(data.projectCategories) })
app.get('/:user/projects', (req, res) => { res.json(data.projects) })
    
app.listen(7722, () => {
    console.log('Listening on :7722')
})

module.exports = app;