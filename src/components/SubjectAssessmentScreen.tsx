import React, { useState } from 'react';

export function SubjectAssessmentScreen({ course, onComplete }) {
  const [selectedLevel, setSelectedLevel] = useState('');

  const handleSelect = (level) => {
    setSelectedLevel(level);
    setTimeout(() => {
      onComplete(level);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-[393px]">
        <div className="text-center mb-12">
          <h1 className="text-[#333333] mb-2">{course?.name}</h1>
          <p className="text-[#666666] text-lg">Wie schätzt du dein Vorwissen ein?</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleSelect('Novice')}
            className={`w-full p-8 rounded-[12px] border-2 transition-all ${
              selectedLevel === 'Novice'
                ? 'border-[#E30613] bg-[#FFF5F5]'
                : 'border-[#E0E0E0] bg-white hover:border-[#E30613]'
            }`}
          >
            <div className="text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-[#333333] mb-2">Novice</h3>
              <p className="text-[#666666]">Ich bin Anfänger in diesem Fach</p>
            </div>
          </button>

          <button
            onClick={() => handleSelect('Intermediate')}
            className={`w-full p-8 rounded-[12px] border-2 transition-all ${
              selectedLevel === 'Intermediate'
                ? 'border-[#E30613] bg-[#FFF5F5]'
                : 'border-[#E0E0E0] bg-white hover:border-[#E30613]'
            }`}
          >
            <div className="text-center">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-[#333333] mb-2">Intermediate</h3>
              <p className="text-[#666666]">Ich habe Grundkenntnisse</p>
            </div>
          </button>

          <button
            onClick={() => handleSelect('Expert')}
            className={`w-full p-8 rounded-[12px] border-2 transition-all ${
              selectedLevel === 'Expert'
                ? 'border-[#E30613] bg-[#FFF5F5]'
                : 'border-[#E0E0E0] bg-white hover:border-[#E30613]'
            }`}
          >
            <div className="text-center">
              <div className="text-5xl mb-4">🌳</div>
              <h3 className="text-[#333333] mb-2">Expert</h3>
              <p className="text-[#666666]">Ich kenne mich gut aus</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
