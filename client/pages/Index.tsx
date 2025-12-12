import { useState } from "react";

export default function Index() {
  const [isOpen, setIsOpen] = useState(true);

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleCreate = () => {
    console.log("Creating schedule...");
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-20">
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-primary text-white rounded-lg font-bold hover:opacity-90 transition-opacity"
        >
          일정 생성 다이얼로그 열기
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-20 p-4">
      <div className="w-full max-w-[600px] bg-white rounded-lg shadow-modal flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b shadow-header rounded-t-lg">
          <h1 className="text-lg font-bold text-text-primary leading-[166%]">
            일정 생성 확인
          </h1>
          <p className="text-sm text-text-tertiary leading-[142%] mt-0.5">
            다음 내용으로 일정을 생성하시겠습니까?
          </p>
        </div>

        {/* Content */}
        <div className="px-6 py-5 flex-1">
          <div className="border border-neutral-50 rounded-lg p-4 space-y-6">
            {/* Recipients */}
            <div className="flex gap-2">
              <div className="w-36 flex-shrink-0">
                <span className="text-sm font-bold text-text-secondary leading-[142%]">
                  받는 사람
                </span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-text-primary leading-[142%]">
                  박서준 &lt;seo-joon@itcen.com&gt;
                  <br />
                  김유미 &lt;yumi@itcen.com&gt;
                </p>
              </div>
            </div>

            {/* Title */}
            <div className="flex gap-2">
              <div className="w-36 flex-shrink-0">
                <span className="text-sm font-bold text-text-secondary leading-[142%]">
                  제목
                </span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-text-primary leading-[142%]">
                  AgentGo 3.0 디자인 컨셉 리뷰 회의
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 flex justify-end items-center gap-2 rounded-b-lg bg-white">
          <button
            onClick={handleCancel}
            className="min-h-[40px] px-4 py-1 flex items-center justify-center gap-2 rounded border border-neutral-border bg-white text-sm font-bold text-neutral-color leading-[142%] hover:bg-neutral-20 transition-colors"
          >
            취소
          </button>
          <button
            onClick={handleCreate}
            className="min-h-[40px] px-4 py-1 flex items-center justify-center gap-1 rounded bg-primary text-sm font-bold text-white leading-[142%] hover:opacity-90 transition-opacity"
          >
            생성하기
          </button>
        </div>
      </div>
    </div>
  );
}
