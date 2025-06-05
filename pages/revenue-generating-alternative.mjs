
import { Page } from 'juphjacs/src/Page.mjs'

class RevenuePage extends Page {
    constructor (rootFolder, filePath, template) {
        super(rootFolder, filePath, template)
        this.title = "Revenue Generating Alternative"
        this.layout = './pages/layouts/index.html'
        this.canonical = 'https://coppellfornewtech.org/revenue-generating-alternative.html'
        this.excerpt = `The Coppell School Board is discussing the 2025-2026 budget and focusing on cost cutting measures. This is a revenue generating alternative to closing New Tech High School.`
        this.shouldPublish = true
        this.published = new Date('2025-06-05 13:00:00')
        this.uri = '/'
        this.image = ''
        this.tags = ['new tech', 'coppell', 'school board', 'budget', 'revenue', 'alternative', 'high school']
    }
}

export default async (rootFolder, filePath, template) => {
    return new RevenuePage(rootFolder, filePath, template)
}
