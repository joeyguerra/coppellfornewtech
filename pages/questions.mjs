
import { Page } from 'juphjacs/src/Page.mjs'

class QuestionsPage extends Page {
    constructor (rootFolder, filePath, template) {
        super(rootFolder, filePath, template)
        this.title = "Questions for the Coppell School Board"
        this.layout = './pages/layouts/index.html'
        this.canonical = 'https://coppellfornewtech.org/questions.html'
        this.excerpt = `The Coppell School Board is discussing the 2025-2026 budget and focusing on cost cutting measures. Here's a list of questions to ask the Board and District Administration.`
        this.shouldPublish = true
        this.published = new Date('2025-06-06 11:00:00')
        this.uri = '/'
        this.image = ''
        this.tags = ['new tech', 'coppell', 'school board', 'budget', 'questions', 'high school']
    }
}

export default async (rootFolder, filePath, template) => {
    return new QuestionsPage(rootFolder, filePath, template)
}
