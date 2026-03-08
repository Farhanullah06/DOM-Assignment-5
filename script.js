// ==========================================
// DOM Assignment #5 - Event Listeners
// ==========================================

// Wait for DOM to fully load before attaching events
document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // Task 1: Button Click Event
    // ==========================================
    const clickBtn = document.getElementById('clickBtn');
    
    clickBtn.addEventListener('click', function() {
        alert('Button Clicked Successfully');
    });
    
    // ==========================================
    // Task 2: Change Text on Click
    // ==========================================
    const changeTextBtn = document.getElementById('changeTextBtn');
    const textParagraph = document.getElementById('textParagraph');
    
    changeTextBtn.addEventListener('click', function() {
        textParagraph.textContent = 'Text Updated Successfully';
        textParagraph.style.borderLeftColor = '#f59e0b';
    });
    
    // ==========================================
    // Task 3: Background Color Change
    // ==========================================
    const bgColorBtn = document.getElementById('bgColorBtn');
    const body = document.body;
    
    // Array of background colors to cycle through
    const bgColors = [
        '#0a0f1a',
        '#1a1a2e',
        '#16213e',
        '#0f3460',
        '#1a1625',
        '#0d1b2a',
        '#1b263b'
    ];
    
    let currentBgIndex = 0;
    
    bgColorBtn.addEventListener('click', function() {
        currentBgIndex = (currentBgIndex + 1) % bgColors.length;
        body.style.backgroundColor = bgColors[currentBgIndex];
    });
    
    // ==========================================
    // Task 4: Input Event (Live Typing)
    // ==========================================
    const liveInput = document.getElementById('liveInput');
    const liveOutput = document.getElementById('liveOutput');
    
    liveInput.addEventListener('input', function() {
        const typedText = liveInput.value;
        
        if (typedText.trim() === '') {
            liveOutput.textContent = 'Your text will appear here...';
            liveOutput.style.color = '#64748b';
        } else {
            liveOutput.textContent = typedText;
            liveOutput.style.color = '#10b981';
        }
    });
    
    // ==========================================
    // Task 5: Mouse Events (Hover Box)
    // ==========================================
    const hoverBox = document.getElementById('hoverBox');
    
    // Original colors
    const originalBg = 'linear-gradient(135deg, #1e3a5f, #0f2744)';
    const originalBorder = '#2d3a4f';
    const originalColor = '#94a3b8';
    
    // Hover colors
    const hoverBg = 'linear-gradient(135deg, #ec4899, #be185d)';
    const hoverBorder = '#ec4899';
    const hoverColor = '#ffffff';
    
    hoverBox.addEventListener('mouseenter', function() {
        hoverBox.style.background = hoverBg;
        hoverBox.style.borderColor = hoverBorder;
        hoverBox.style.color = hoverColor;
        hoverBox.style.boxShadow = '0 10px 40px rgba(236, 72, 153, 0.4)';
        hoverBox.querySelector('span').textContent = 'Active!';
    });
    
    hoverBox.addEventListener('mouseleave', function() {
        hoverBox.style.background = originalBg;
        hoverBox.style.borderColor = originalBorder;
        hoverBox.style.color = originalColor;
        hoverBox.style.boxShadow = 'none';
        hoverBox.querySelector('span').textContent = 'Hover Me';
    });
    
    // ==========================================
    // Task 6: Double Click Event
    // ==========================================
    const dblClickBtn = document.getElementById('dblClickBtn');
    
    dblClickBtn.addEventListener('dblclick', function() {
        alert('Double Click Detected');
    });
    
});