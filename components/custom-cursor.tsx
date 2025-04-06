'use client';

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  animate as fmAnimate,
} from 'framer-motion';
import { useEffect, useState, useCallback, useRef } from 'react';

// --- Configuration ---
const colors = {
  core: '#A04030', // Deep Red/Terracotta
  haloDefault: '#E89838', // Ochre/Gold outline
  haloInteract: '#FDF3E3', // Light Beige fill on hover
  haloInteractBorder: '#A04030', // Border matches core on hover
  initialText: '#FFFFFF',
};

const cursorSizeCore = 8;
const cursorSizeHalo = 32; // Base size

// Optimized Spring configurations for smooth, responsive feel
const springConfigCore = {
  damping: 30,
  stiffness: 500,
  mass: 0.8,
  restDelta: 0.001,
};
const springConfigHalo = {
  damping: 40,
  stiffness: 250,
  mass: 1.2,
  restDelta: 0.001,
}; // Softer spring for halo lag

// --- Component ---
export function CustomCursor() {
  const [cursorVariant, setCursorVariant] = useState<
    'default' | 'hover' | 'click'
  >('default');
  const prefersReducedMotion = useReducedMotion();

  // --- Motion Values for Position (Raw Mouse Input) ---
  // Updates without React re-renders - Essential for performance
  const mouseX = useMotionValue(-100); // Start off-screen
  const mouseY = useMotionValue(-100);

  // --- Spring-Smoothed Motion Values for Cursor Elements ---
  // These connect to raw mouse values and apply physics for smooth movement
  // Framer Motion maps style props 'x' and 'y' to `transform: translate()` for GPU acceleration
  const smoothMouseXCore = useSpring(mouseX, springConfigCore);
  const smoothMouseYCore = useSpring(mouseY, springConfigCore);
  const smoothMouseXHalo = useSpring(mouseX, springConfigHalo); // Halo X tracks Mouse X
  const smoothMouseYHalo = useSpring(mouseY, springConfigHalo); // Halo Y tracks Mouse Y

  // --- Motion Values for Style Properties (Animated based on state) ---
  // 'scale' is GPU-accelerated via `transform: scale()`
  const coreScale = useMotionValue(1);
  const haloScale = useMotionValue(1);
  // 'opacity' is GPU-accelerated
  const coreOpacity = useMotionValue(1);
  const haloOpacity = useMotionValue(1);
  // Other properties (less likely to be consistently GPU-accelerated but still animatable)
  const coreBg = useMotionValue(colors.core);
  const haloBorder = useMotionValue(colors.haloDefault);
  const haloBg = useMotionValue('transparent');
  const haloBorderWidth = useMotionValue(2);

  // --- Event Handlers ---
  // Updates raw mouse motion values directly
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    },
    [mouseX, mouseY]
  );

  // Interaction check using requestAnimationFrame for efficiency
  const rafId = useRef<number | null>(null);
  const checkInteractionRaf = useCallback(() => {
    const currentX = mouseX.get();
    const currentY = mouseY.get();
    const element = document.elementFromPoint(currentX, currentY);
    let nextVariant: 'default' | 'hover' = 'default';

    if (element?.closest('a, button, [data-cursor-interactable]')) {
      nextVariant = 'hover';
    }

    setCursorVariant((prev) => {
      if (prev === 'click') return nextVariant; // Correctly revert from click
      if (prev !== nextVariant) return nextVariant; // Only change if different
      return prev;
    });

    rafId.current = requestAnimationFrame(checkInteractionRaf); // Loop
  }, [mouseX, mouseY]); // Include motion values as dependencies

  const handleMouseDown = useCallback(() => {
    setCursorVariant((prev) => (prev === 'hover' ? 'click' : prev));
  }, []);

  const handleMouseUp = useCallback(() => {
    // Immediately check and set state based on current hover status
    const element = document.elementFromPoint(mouseX.get(), mouseY.get());
    const nextVariant = element?.closest(
      'a, button, [data-cursor-interactable]'
    )
      ? 'hover'
      : 'default';
    setCursorVariant(nextVariant);
  }, [mouseX, mouseY]);

  // --- Animate Styles based on cursorVariant State ---
  useEffect(() => {
    const transition = { type: 'spring', duration: 0.4, bounce: 0.3 };

    if (prefersReducedMotion) {
      // Set final states directly for reduced motion
      coreScale.set(cursorVariant === 'hover' ? 0.5 : 1);
      coreOpacity.set(cursorVariant === 'hover' ? 0.7 : 1);
      haloScale.set(cursorVariant === 'hover' ? 1.5 : 1);
      haloOpacity.set(1);
      haloBorder.set(
        cursorVariant === 'hover'
          ? colors.haloInteractBorder
          : colors.haloDefault
      );
      haloBg.set(
        cursorVariant === 'hover' ? colors.haloInteract + 'B3' : 'transparent'
      );
      haloBorderWidth.set(cursorVariant === 'click' ? 3 : 2);
    } else {
      // Use fmAnimate for smooth transitions targeting motion values
      // Prioritize animating transform (scale) and opacity
      fmAnimate(
        coreScale,
        cursorVariant === 'click' ? 0.8 : cursorVariant === 'hover' ? 0.5 : 1,
        transition
      );
      fmAnimate(
        coreOpacity,
        cursorVariant === 'click' ? 0.9 : cursorVariant === 'hover' ? 0.7 : 1,
        transition
      );

      fmAnimate(
        haloScale,
        cursorVariant === 'click' ? 1.3 : cursorVariant === 'hover' ? 1.5 : 1,
        transition
      );
      // fmAnimate(haloOpacity, 1, transition); // Often halo opacity doesn't change

      // Animate other properties
      fmAnimate(
        haloBorder,
        cursorVariant === 'click' || cursorVariant === 'hover'
          ? colors.haloInteractBorder
          : colors.haloDefault,
        transition
      );
      fmAnimate(
        haloBg,
        cursorVariant === 'click'
          ? colors.haloInteract + 'E6'
          : cursorVariant === 'hover'
          ? colors.haloInteract + 'B3'
          : 'transparent',
        transition
      );
      fmAnimate(haloBorderWidth, cursorVariant === 'click' ? 3 : 2, transition);
    }
    // coreBg is static, no need to animate here unless desired
    // coreBg.set(colors.core);
  }, [
    cursorVariant,
    coreScale,
    coreOpacity,
    haloScale,
    haloOpacity,
    haloBorder,
    haloBg,
    haloBorderWidth,
    prefersReducedMotion,
  ]);

  // --- Setup Listeners and Cleanup ---
  useEffect(() => {
    document.body.style.cursor = 'none';
    window.addEventListener('mousemove', handleMouseMove, { passive: true }); // Use passive listener
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Start RAF loop
    rafId.current = requestAnimationFrame(checkInteractionRaf);

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleMouseMove, handleMouseDown, handleMouseUp, checkInteractionRaf]); // Ensure checkInteractionRaf is dependency

  // --- Render Elements ---
  // Apply motion values directly to style props. Framer Motion optimizes this.
  // Using `x`, `y`, `scale` will translate to `transform` styles for GPU acceleration.
  return (
    <>
      {/* Outer Halo - Lagging Element */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border-2 pointer-events-none z-[9999]"
        style={{
          // Dimensions
          width: cursorSizeHalo,
          height: cursorSizeHalo,
          // ** GPU Accelerated Properties **
          x: smoothMouseXHalo, // Mapped to transform: translateX(...)
          y: smoothMouseYHalo, // Mapped to transform: translateY(...)
          scale: haloScale, // Mapped to transform: scale(...)
          opacity: haloOpacity,
          // Centering Correction (also uses transform)
          translateX: '-50%',
          translateY: '-50%',
          // Other Styles (Animated via motion values, may or may not be GPU accelerated)
          borderColor: haloBorder,
          backgroundColor: haloBg,
          borderWidth: haloBorderWidth, // Apply motion value directly
        }}
      />
      {/* Central Core - Responsive Element */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          // Dimensions
          width: cursorSizeCore,
          height: cursorSizeCore,
          // ** GPU Accelerated Properties **
          x: smoothMouseXCore,
          y: smoothMouseYCore,
          scale: coreScale,
          opacity: coreOpacity,
          // Centering Correction
          translateX: '-50%',
          translateY: '-50%',
          // Other Styles
          backgroundColor: coreBg, // Usually static, but bound to motion value
        }}
      />
    </>
  );
}
