import { Github, Wand2 } from 'lucide-react'
import { Button } from "./components/ui/button";
import { Separator } from './components/ui/separator';
import { Textarea } from './components/ui/textarea';
import { Slider } from './components/ui/slider';
import { VideoInputForm } from './components/video-input-form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';

export function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl bold">upload.ai</h1>
        <div className="flex items-center gap-6">
          <span className="text-small text-muted-foreground">Desenvolvido com ❤️</span>

          <Separator orientation="vertical" className="h6"/>

          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>
      <main className="flex-1 p-6 flex gap-6">
      <div className="flex flex-col flex-1 gap-4">
        <div className="grid grid-row-2 gap-4 flex-1">
          <Textarea 
            className="resize-none p-4 leading-relaxed"
            placeholder="Inclua um prompt para a IA..." />
          <Textarea 
            className="resize-none p-4 leading-relaxed"
            placeholder="Resultado gerado pela IA..." 
            readOnly />
        </div>
        <p className="text-small text-muted-foreground">Lembre-se você pode utilizar a variável <code className="text-violet-400">{'{transcription}'}</code> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado</p>
      </div>
      <aside className="w-80 space-y-6">
        <VideoInputForm />

        <Separator />

        <form className="space-y-6">
          <div className="space-y-2">
            <label>Prompt</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecione um prompt..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="title">Título do YouTube</SelectItem>
                <SelectItem value="description">Descrição do YouTube</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator />

          <div className="space-y-2">
            <label>Modelo</label>
            <Select disabled defaultValue="gpt3.5">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
              </SelectContent>
            </Select>
            <span className="block text-xs text-muted-foreground italic">Você poderá customizar esta opção em breve</span>
          </div>

          <Separator />

          <div className="space-y-4">
            <label>Temperatura</label>
            <Slider
              min={0}
              max={1}
              step={0.1}
             />
            <span className="block text-xs text-muted-foreground italic leading-relaxed">Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros</span>
          </div>

          <Separator />

          <Button type="submit" className="w-full">
            Executar
            <Wand2 className="w-4 h-4 ml-2" />
          </Button>
        </form>
      </aside>  
      </main>
    </div>
  )
}
