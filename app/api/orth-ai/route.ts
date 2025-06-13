import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { symptoms, bodyPart } = await request.json();

    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: `你是一個專業的骨科醫師，請根據患者的症狀和部位，提供6個治療建議。
          請以JSON格式回覆，包含治療方式清單和治療相關情況兩個陣列。
          治療方式清單應包含具體的治療方法，治療相關情況應包含對應的治療效果說明。
          每個陣列都應該只包含6個項目。`
        },
        {
          role: "user",
          content: `症狀：${symptoms}\n部位：${bodyPart}`
        }
      ],
      response_format: { type: "json_object" }
    });

    const content = completion.choices[0].message.content;
    if (!content) {
      throw new Error('No content received from OpenAI');
    }

    const response = JSON.parse(content);
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: '處理請求時發生錯誤' },
      { status: 500 }
    );
  }
}
