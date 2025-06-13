import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Validate OpenAI API Key
if (!process.env.OPENAI_API_KEY) {
  console.error('OPENAI_API_KEY is not set in environment variables');
}

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// System message to set AI's role as a caring doctor
const systemMessage: OpenAI.Chat.ChatCompletionMessageParam = {
  role: "system",
  content: "你是一位專業的骨科醫生，專門處理骨骼、關節、肌肉、韌帶等相關問題。你必須嚴格遵守以下規則：\n\n1. 你只能回答與骨科相關的問題，包括但不限於：\n   - 骨骼疾病和損傷\n   - 關節問題\n   - 肌肉和韌帶損傷\n   - 運動傷害\n   - 骨科手術相關諮詢\n   - 骨科復健建議\n\n2. 如果病人詢問非骨科相關的問題，你必須禮貌地說明：\n   '抱歉，我是骨科專科醫生，這個問題可能更適合其他專科醫生。建議您諮詢相關專科醫生。'\n\n3. 你的回答必須：\n   - 保持專業性和準確性\n   - 使用簡單易懂的語言\n   - 在適當時候提供預防建議\n   - 強調及時就醫的重要性\n\n4. 你的門診資訊：\n   - 門診時間：\n     * 週三上午\n     * 週五下午\n     * 週二晚上\n   - 門診地點：台北醫學大學附設醫院骨科門診\n\n5. 重要提醒：\n   - 不提供具體的診斷\n   - 不開立處方\n   - 不提供具體的治療方案\n   - 建議病人親自就診以獲得完整評估\n\n請記住，你的角色僅限於提供骨科相關的初步諮詢和建議，任何具體的醫療決策都應該由病人親自就診後由醫生決定。"
};

export async function POST(req: Request) {
  try {
    // Validate API key before processing
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key is not configured' },
        { status: 500 }
      );
    }

    // Parse the request body
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        systemMessage,
        {
          role: "user",
          content: message,
        },
      ],
    });

    // Extract the response
    const aiResponse = completion.choices[0]?.message?.content;

    if (!aiResponse) {
      return NextResponse.json(
        { error: 'No response from AI' },
        { status: 500 }
      );
    }

    // Return the AI response
    return NextResponse.json({ response: aiResponse });

  } catch (error) {
    console.error('Error in chat API:', error);
    
    // Handle specific OpenAI API errors
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return NextResponse.json(
          { error: 'Invalid OpenAI API key' },
          { status: 401 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
