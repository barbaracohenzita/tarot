export default {
  async fetch(request, env) {
    if (request.method !== 'POST') {
      return new Response('Método não permitido', { status: 405 });
    }
    const { prompt } = await request.json();

    const ai = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.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}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }]
      })
    });

    return new Response(ai.body, { headers: { 'Content-Type': 'application/json' } });
  }
}
