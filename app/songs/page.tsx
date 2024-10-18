"use client";

import WindowWrapper from '../../components/WindowWrapper';
import SongsContent from '../../components/SongsContent';

export default function SongsPage() {
  return (
    <WindowWrapper title="Songs" onClose={() => {}} zIndex={1}>
      <SongsContent />
    </WindowWrapper>
  );
}
