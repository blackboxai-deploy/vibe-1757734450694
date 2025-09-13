import { Chatbot } from "@/components/demo";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-foreground">Canvas Effect Demo</h1>
            <p className="text-muted-foreground text-lg">
              Hover over the chatbot interface to see the interactive canvas effect in dark mode
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg shadow-2xl p-6">
            <Chatbot />
          </div>
        </div>
      </div>
    </main>
  );
}