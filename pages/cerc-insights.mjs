
import { Page } from 'juphjacs/src/Page.mjs'

class CercInsightsPage extends Page {
    constructor (rootFolder, filePath, template) {
        super(rootFolder, filePath, template)
        this.title = "Coppell ISD Efficiency Review Committee: Key Insights"
        this.layout = './pages/layouts/index.html'
        this.canonical = 'https://coppellfornewtech.org/cerce-insights.html'
        this.excerpt = `A committee was formed to come up with options to address the budget crisis.`
        this.shouldPublish = true
        this.published = new Date('2025-06-07 17:00:00')
        this.uri = '/'
        this.image = ''
        this.tags = ['new tech', 'coppell', 'school board', 'budget', 'cerc', 'insights', 'high school', 'closures']
    }
}

export default async (rootFolder, filePath, template) => {
    return new CercInsightsPage(rootFolder, filePath, template)
}
