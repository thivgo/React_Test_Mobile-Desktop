import React from 'react';

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface ValueItem {
  icon: React.ReactNode;
  label: string;
}