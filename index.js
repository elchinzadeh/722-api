const express = require('express')
const data = require('./data')

const app = express()

const prefixes = {
    'aytac': { name: 'Aytac Mehtizadə' },
    'cavidan': { name: 'Cavidan Əhmədov' },
    'elmar': { name: 'Elmar Qarayev' },
    'ferid': { name: 'Fərid Səmədli' },
    'gunay': { name: 'Günay Hüseynli' },
    'penah': { name: 'Pənah Kərimov' },
    'rufet': { name: 'Rüfət Səmədov' },
    'yusif': { name: 'Yusif Sərdarlı' }
}

app.get('/:prefix/configuration', (req, res) => {
    const configuration = {...data.configuration}
    
    if (prefixes[req.params.prefix]) {
        configuration.home.name = prefixes[req.params.prefix].name
    }
    res.json(configuration)
})
app.get('/:prefix/languages', (req, res) => { res.json(data.languages) })
app.get('/:prefix/profile', (req, res) => { res.json(data.profile) })
app.get('/:prefix/workingProcess', (req, res) => { res.json(data.workingProcess) })
app.get('/:prefix/skills', (req, res) => { res.json(data.skills) })
app.get('/:prefix/technologies', (req, res) => { res.json(data.technologies) })
app.get('/:prefix/references', (req, res) => { res.json(data.references) })
app.get('/:prefix/projectCategories', (req, res) => { res.json(data.projectCategories) })
app.get('/:prefix/projects', (req, res) => { res.json(data.projects) })
    
app.listen(7722, () => {
    console.log('Listening on :7722')
})