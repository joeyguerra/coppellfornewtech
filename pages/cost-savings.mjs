
import { Page } from 'juphjacs/src/Page.mjs'

class CostSavingsPage extends Page {
    constructor (rootFolder, filePath, template) {
        super(rootFolder, filePath, template)
        this.title = "Cost Savings Alternative to Closing New Tech High School"
        this.layout = './pages/layouts/index.html'
        this.canonical = 'https://coppellfornewtech.org/revenue-generating-alternative.html'
        this.excerpt = `The Coppell School Board is discussing the 2025-2026 budget and focusing on cost cutting measures. This is a cost savings alternative to closing New Tech High School.`
        this.shouldPublish = true
        this.published = new Date('2025-06-05 21:00:00')
        this.uri = '/'
        this.image = ''
        this.tags = ['new tech', 'coppell', 'school board', 'budget', 'cost', 'savings', 'high school']
    }
}

export default async (rootFolder, filePath, template) => {
    return new CostSavingsPage(rootFolder, filePath, template)
}
