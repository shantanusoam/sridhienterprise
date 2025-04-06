// src/components/ExperienceShield.tsx
import React from 'react';
import clsx from 'clsx'; // Optional: for combining class names

interface ExperienceShieldProps {
  years?: number | string; // Allow string for flexibility if needed
  textLine1?: string;
  textLine2?: string;
  className?: string; // Allow passing custom classes for positioning, margin, etc.
}

// Colors adjusted to visually match the target image better
const colors = {
  fill: '#F5E5C6', // Lighter, slightly desaturated tan/ochre for the shield face
  stroke: '#C77C42', // Medium-dark orange/brown border matching the image
  text: '#5A3A2D', // Dark brown text matching the image
};

const ExperienceShield: React.FC<ExperienceShieldProps> = ({
  years = 14, // Default value
  textLine1 = 'Years of',
  textLine2 = 'experience.',
  className, // Accept className from parent
}) => {
  return (
    // Apply passed className here. Base size is defined.
    // Removed absolute positioning - parent should handle positioning.
    <div
      className={clsx(
        'relative w-[158px] h-[188px]', // Base size (adjust if needed)
        className // Merge external classes
      )}
    >
      {/* SVG Container - Add drop shadow for depth */}
      <svg
        viewBox="0 0 100 128" // Adjusted viewBox slightly for potentially better aspect ratio
        className="w-full h-full  drop-shadow-md"
        aria-hidden="true" // Hide decorative SVG from screen readers
      >
        {/* Shield Path - Using adjusted colors and stroke width */}
        <path
          // The specific path defines the pointed bottom shield shape
          d="M50,0 C70,10 100,15 100,40 C100,85 75,105 50,125 C25,105 0,85 0,40 C0,15 30,10 50,0 Z"
          fill={colors.fill}
          stroke={colors.stroke}
          strokeWidth="5" // Increased stroke width for visual match
        />
      </svg>
      {/* Text Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        {/* Number - Large, Bold, Serif */}
        <span
          className="text-5xl md:text-6xl font-bold font-serif leading-none" // Use specific font class
          style={{ color: colors.text }}
        >
          {years}
        </span>
        {/* Text Lines - Smaller, Medium Weight, Serif */}
        <div
          className="text-xs md:text-sm font-medium font-serif mt-1 md:mt-1.5" // Use specific font class
          style={{ color: colors.text }}
        >
          {/* Use spans for clarity, screen readers will read naturally */}
          <span>{textLine1}</span>
          <br />
          <span>{textLine2}</span>
        </div>
      </div>
    </div>
  );
};

export default ExperienceShield;
