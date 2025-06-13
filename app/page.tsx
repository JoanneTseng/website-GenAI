export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Header Section */}
        <header className="text-center py-16 px-4 bg-white">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            骨科術後照護，讓您安心康復
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            專業的術後衛教指導，幫助您更快恢復健康生活
          </p>
        </header>

        {/* Section 1: Orthopedic Surgery Areas */}
        <section className="py-12 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            骨科手術部位
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_25px_-5px_rgba(0,105,180,0.2)] group">
              <img 
                src="https://picsum.photos/400/300?random=1" 
                alt="膝關節手術" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#0069B4] transition-colors duration-300">膝關節手術</h3>
                <p className="text-gray-600">專業的膝關節置換與修復手術</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_25px_-5px_rgba(0,105,180,0.2)] group">
              <img 
                src="https://picsum.photos/400/300?random=2" 
                alt="髖關節手術" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#0069B4] transition-colors duration-300">髖關節手術</h3>
                <p className="text-gray-600">精準的髖關節置換與修復</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_25px_-5px_rgba(0,105,180,0.2)] group">
              <img 
                src="https://picsum.photos/400/300?random=3" 
                alt="脊椎手術" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#0069B4] transition-colors duration-300">脊椎手術</h3>
                <p className="text-gray-600">微創脊椎手術與復健治療</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_25px_-5px_rgba(0,105,180,0.2)] group">
              <img 
                src="https://picsum.photos/400/300?random=4" 
                alt="肩關節手術" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#0069B4] transition-colors duration-300">肩關節手術</h3>
                <p className="text-gray-600">肩關節鏡手術與肩袖修復</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_25px_-5px_rgba(0,105,180,0.2)] group">
              <img 
                src="https://picsum.photos/400/300?random=5" 
                alt="肱骨手術" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#0069B4] transition-colors duration-300">肱骨手術</h3>
                <p className="text-gray-600">肱骨骨折固定與重建手術</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_25px_-5px_rgba(0,105,180,0.2)] group">
              <img 
                src="https://picsum.photos/400/300?random=6" 
                alt="腕關節手術" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#0069B4] transition-colors duration-300">腕關節手術</h3>
                <p className="text-gray-600">腕關節鏡手術與腕管綜合症治療</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_25px_-5px_rgba(0,105,180,0.2)] group">
              <img 
                src="https://picsum.photos/400/300?random=7" 
                alt="踝關節手術" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#0069B4] transition-colors duration-300">踝關節手術</h3>
                <p className="text-gray-600">踝關節穩定性重建與韌帶修復</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_25px_-5px_rgba(0,105,180,0.2)] group">
              <img 
                src="https://picsum.photos/400/300?random=8" 
                alt="肘關節手術" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#0069B4] transition-colors duration-300">肘關節手術</h3>
                <p className="text-gray-600">肘關節置換與網球肘治療</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_25px_-5px_rgba(0,105,180,0.2)] group">
              <img 
                src="https://picsum.photos/400/300?random=9" 
                alt="骨盆手術" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#0069B4] transition-colors duration-300">骨盆手術</h3>
                <p className="text-gray-600">骨盆骨折固定與重建手術</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Health Education Manual */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              衛生教育手冊
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-semibold mb-4">術後注意事項</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• 傷口照護與換藥指導</li>
                  <li>• 正確的活動與休息方式</li>
                  <li>• 飲食建議與營養補充</li>
                  <li>• 復健運動指導</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-semibold mb-4">居家照護指南</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• 居家環境安全評估</li>
                  <li>• 輔具使用說明</li>
                  <li>• 疼痛管理方法</li>
                  <li>• 緊急情況處理</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Contact Information */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              聯絡資訊
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-semibold mb-3">門診時間</h3>
                <p className="text-gray-600">
                  週一至週五：09:00 - 17:00<br />
                  週六：09:00 - 12:00<br />
                  週日及國定假日：休診
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-semibold mb-3">聯絡方式</h3>
                <p className="text-gray-600">
                  電話：(02) 1234-5678<br />
                  傳真：(02) 1234-5679<br />
                  信箱：dr.cw@example.com
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-semibold mb-3">診所地址</h3>
                <p className="text-gray-600">
                  台北市信義區信義路五段7號<br />
                  台北醫學大學附設醫院<br />
                  骨科門診中心
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">關於我們</h4>
                <p className="text-gray-400">
                  Dr. CW的骨科術後衛生教育網站，致力於提供專業的術後照護指導，幫助病患更快恢復健康。
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">快速連結</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">首頁</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">手術部位</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">衛教手冊</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">聯絡資訊</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">社群媒體</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="text-xl">📱</span>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="text-xl">💬</span>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="text-xl">📧</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>© 2024 Dr. CW的骨科術後衛生教育. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
