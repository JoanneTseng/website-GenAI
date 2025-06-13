import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { symptoms } = body;

    if (!symptoms) {
      return NextResponse.json(
        { error: '症狀描述是必需的' },
        { status: 400 }
      );
    }

    // TODO: 在這裡整合 AI 模型來分析症狀
    // 目前返回模擬回應
    const response = {
      analysis: `根據您描述的症狀 "${symptoms}"，建議您：\n1. 保持休息\n2. 避免劇烈運動\n3. 如果症狀持續，請盡快就醫`,
      severity: '中等',
      recommendations: [
        '建議就醫檢查',
        '避免過度使用患處',
        '保持適當休息'
      ]
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('症狀分析錯誤:', error);
    return NextResponse.json(
      { error: '處理請求時發生錯誤' },
      { status: 500 }
    );
  }
}
