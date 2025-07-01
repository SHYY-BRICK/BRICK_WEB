import React from "react";
import NewsPublish from "@/components/NewsPublish";

interface Props {
  onClose: () => void;
}

const NewsModalWrapper = ({ onClose }: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(39,39,39,0.2)] backdrop-blur-sm">
      <NewsPublish onClose={onClose} />
    </div>
  );
};

export default NewsModalWrapper;
