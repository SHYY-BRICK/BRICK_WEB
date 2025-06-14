import React from "react";

interface Notification {
  id: number;
  username: string;
  content: string;
}

interface BellProps {
  notifications: Notification[];
}

const Bell = ({ notifications }: BellProps) => {
  return (
    <main className="w-[520px] bg-white rounded-2xl border border-grey-400">
      {notifications.map((note, idx) => (
        <article
          key={note.id}
          className={`flex items-center gap-3 px-[0.9375rem] py-[0.875rem] ${
            idx < notifications.length - 1 ? "border-b border-grey-400" : ""
          }`}
        >
          <div className="w-[32px] h-[32px] bg-sky-400 rounded-full" />
          <p className="text-p2 text-black">
            <span className="font-regular">{note.username}</span>님이{" "}
            <span className="font-bold">{note.content}</span>를 획득했습니다!
          </p>
        </article>
      ))}
    </main>
  );
};

export default Bell;
