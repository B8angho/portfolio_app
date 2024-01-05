import React from "react";
import styled from "styled-components";

// Create a styled component for the glass effect
const GlassEffectContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(42, 85, 32, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 30px;
  margin: 30px;
`;

// Define the OtherContent component using the styled component
export default function OtherContent() {
  return (
    <div>
      <GlassEffectContainer>
        {/* Your content for the OtherContent section */}
        <h2>Technology Stack</h2>
        <p>Express your technology stack here...</p>
      </GlassEffectContainer>
      <GlassEffectContainer>
        {/* Your content for the OtherContent section */}
        <h2>Technology Stack</h2>
        <p>Express your technology stack here...</p>
      </GlassEffectContainer>
    </div>
  );
}
