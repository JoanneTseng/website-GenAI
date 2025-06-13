'use client';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { db } from '../../services/firebase';
import { collection, addDoc, getDocs, query, orderBy, Timestamp } from 'firebase/firestore';

interface TreatmentResponse {
  治療方式清單: string[];
  治療相關情況: string[];
}

interface TreatmentCard {
  id: string;
  symptoms: string;
  bodyPart: string;
  treatments: TreatmentResponse;
  timestamp: Date;
}

export default function AIOrthPage() {
  const [symptoms, setSymptoms] = useState('');
  const [bodyPart, setBodyPart] = useState('');
  const [treatmentCards, setTreatmentCards] = useState<TreatmentCard[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);

  // 從 Firestore 讀取資料
  useEffect(() => {
    const fetchTreatmentCards = async () => {
      try {
        const q = query(collection(db, 'orth-ai'), orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);
        const cards = querySnapshot.docs.map(doc => ({
          id: doc.id,
          symptoms: doc.data().symptoms,
          bodyPart: doc.data().bodyPart,
          treatments: doc.data().treatments,
          timestamp: doc.data().timestamp.toDate()
        })) as TreatmentCard[];
        setTreatmentCards(cards);
      } catch (err) {
        console.error('Error fetching treatment cards:', err);
        alert('讀取治療記錄時發生錯誤');
      }
    };

    fetchTreatmentCards();
  }, []);

  const handleTTS = async (text: string) => {
    try {
      const response = await fetch('/api/tts-ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, language: 'zh-TW' }),
      });

      if (!response.ok) {
        throw new Error('TTS request failed');
      }

      const data = await response.json();
      const audio = new Audio(`data:audio/mp3;base64,${data.audio}`);
      
      // Stop any currently playing audio
      if (playingAudio) {
        const currentAudio = document.querySelector(`audio[data-id="${playingAudio}"]`) as HTMLAudioElement;
        if (currentAudio) {
          currentAudio.pause();
          currentAudio.currentTime = 0;
        }
      }

      // Play the new audio
      audio.play();
      setPlayingAudio(text);
      
      // Reset playing state when audio ends
      audio.onended = () => {
        setPlayingAudio(null);
      };
    } catch (err) {
      console.error('TTS Error:', err);
      setError('語音播放失敗');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/orth-ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symptoms, bodyPart }),
      });

      if (!response.ok) {
        throw new Error('請求失敗');
      }

      const data = await response.json();
      
      // 創建新的治療卡片組
      const newCard: TreatmentCard = {
        id: Date.now().toString(),
        symptoms,
        bodyPart,
        treatments: data,
        timestamp: new Date()
      };

      // 儲存到 Firestore
      try {
        await addDoc(collection(db, 'orth-ai'), {
          symptoms,
          bodyPart,
          treatments: data,
          timestamp: Timestamp.fromDate(new Date())
        });
      } catch (err) {
        console.error('Error saving to Firestore:', err);
        alert('儲存治療記錄時發生錯誤');
      }

      // 將新的卡片組添加到陣列開頭
      setTreatmentCards(prev => [newCard, ...prev]);
      
      // 清空表單
      setSymptoms('');
      setBodyPart('');
    } catch (err) {
      setError('獲取治療建議時發生錯誤');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
      <header className="bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-blue-900">
            AI 骨科知識聯想
          </h1>
          <p className="mt-2 text-lg text-blue-700">
            透過人工智慧技術，探索骨科相關知識與治療方案
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6 space-y-6">
          <div>
            <label htmlFor="symptoms" className="block text-sm font-medium text-blue-900 mb-2">
              請描述您的不適症狀
            </label>
            <input
              type="text"
              id="symptoms"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="w-full px-4 py-2 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="例如：肩膀疼痛、活動受限..."
              required
            />
          </div>

          <div>
            <label htmlFor="bodyPart" className="block text-sm font-medium text-blue-900 mb-2">
              選擇身體部位
            </label>
            <select
              id="bodyPart"
              value={bodyPart}
              onChange={(e) => setBodyPart(e.target.value)}
              className="w-full px-4 py-2 border border-blue-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">請選擇部位</option>
              <option value="shoulder">肩膀</option>
              <option value="hip">髖關節</option>
              <option value="knee">膝蓋</option>
              <option value="ankle">腳踝</option>
              <option value="wrist">手腕</option>
              <option value="elbow">手肘</option>
              <option value="spine">脊椎</option>
              <option value="neck">頸部</option>
              <option value="foot">足部</option>
              <option value="hand">手部</option>
              <option value="back">背部</option>
              <option value="pelvis">骨盆</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium disabled:bg-blue-400"
          >
            {loading ? '處理中...' : 'AI聯想相關知識'}
          </button>
        </form>

        {error && (
          <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <div className="mt-8 space-y-8">
          {treatmentCards.map((card) => (
            <div key={card.id} className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-blue-900">
                  治療建議
                </h2>
                <span className="text-sm text-gray-500">
                  {card.timestamp.toLocaleString()}
                </span>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium text-blue-800 mb-2">不適症狀</h3>
                    <p className="text-gray-700">{card.symptoms}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-blue-800 mb-2">不適部位</h3>
                    <p className="text-gray-700">{card.bodyPart}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-medium text-blue-800 mb-4">治療方式</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {card.treatments.治療方式清單.map((treatment, index) => (
                      <div key={index} className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-medium text-blue-900">{treatment}</h4>
                            <p className="text-blue-700 mt-2">{card.treatments.治療相關情況[index]}</p>
                          </div>
                          <button
                            onClick={() => handleTTS(treatment)}
                            className="ml-2 p-2 text-blue-600 hover:text-blue-800 transition-colors"
                            title="播放語音"
                          >
                            <FontAwesomeIcon 
                              icon={faPlay} 
                              className={`w-4 h-4 ${playingAudio === treatment ? 'text-blue-800' : ''}`}
                            />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
