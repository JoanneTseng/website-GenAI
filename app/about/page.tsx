import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            關於 Dr. CW 的骨科術後衛生教育
          </h1>
          <p className="text-xl text-gray-600">
            專業的骨科術後照護指導，讓您的康復之路更加順暢
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">我們的使命</h2>
              <p className="text-gray-600 mb-4">
                在 Dr. CW 的骨科術後衛生教育網站，我們致力於提供最專業、最完整的骨科術後照護指導。我們相信，良好的術後照護是手術成功的重要關鍵。
              </p>
              <p className="text-gray-600">
                透過這個平台，我們希望能夠幫助每一位病患更好地了解自己的康復過程，掌握正確的照護方法，從而達到最佳的康復效果。
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-4">我們的目標</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  提供專業的術後照護指導
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  建立完整的衛教資源庫
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  促進醫病溝通與理解
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span>
                  提升病患康復品質
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">專業團隊</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image 
                  src="https://picsum.photos/200/200?random=1" 
                  alt="Dr. CW" 
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dr. CW</h3>
              <p className="text-gray-600 mb-2">骨科主治醫師</p>
              <p className="text-sm text-gray-500">
                專精於關節置換手術及運動傷害治療，擁有豐富的臨床經驗。
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image 
                  src="https://picsum.photos/200/200?random=2" 
                  alt="王護理長" 
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">王護理長</h3>
              <p className="text-gray-600 mb-2">護理部主任</p>
              <p className="text-sm text-gray-500">
                負責術後照護指導及病患衛教，致力於提升病患照護品質。
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image 
                  src="https://picsum.photos/200/200?random=3" 
                  alt="李物理治療師" 
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">李物理治療師</h3>
              <p className="text-gray-600 mb-2">物理治療師</p>
              <p className="text-sm text-gray-500">
                專注於骨科術後復健治療，協助病患恢復最佳功能。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">我們的價值</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-3">專業知識</h3>
              <p className="text-gray-600">
                提供最新、最專業的骨科術後照護知識
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">用心服務</h3>
              <p className="text-gray-600">
                以病患為中心，提供貼心的照護服務
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-3">持續學習</h3>
              <p className="text-gray-600">
                不斷更新知識，追求更好的照護品質
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold mb-3">關懷支持</h3>
              <p className="text-gray-600">
                全程陪伴，給予病患最溫暖的支持
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
