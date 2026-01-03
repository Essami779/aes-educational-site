// ===================================
// AES Encryption Tool - JavaScript
// ===================================

// DOM Elements
const modeBtns = document.querySelectorAll('.mode-btn');
const encryptSection = document.getElementById('encrypt-section');
const decryptSection = document.getElementById('decrypt-section');

const plaintextInput = document.getElementById('plaintext');
const encryptKeyInput = document.getElementById('encrypt-key');
const encryptBtn = document.getElementById('encrypt-btn');
const encryptOutput = document.getElementById('encrypt-output');
const ciphertextOutput = document.getElementById('ciphertext');
const copyCipherBtn = document.getElementById('copy-cipher');

const ciphertextInput = document.getElementById('ciphertext-input');
const decryptKeyInput = document.getElementById('decrypt-key');
const decryptBtn = document.getElementById('decrypt-btn');
const decryptOutput = document.getElementById('decrypt-output');
const decryptedTextOutput = document.getElementById('decrypted-text');
const copyDecryptedBtn = document.getElementById('copy-decrypted');

const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

// ===================================
// Mode Switching
// ===================================
modeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const mode = btn.dataset.mode;
    
    // Update active button
    modeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Show/hide sections
    if (mode === 'encrypt') {
      encryptSection.style.display = 'block';
      decryptSection.style.display = 'none';
    } else {
      encryptSection.style.display = 'none';
      decryptSection.style.display = 'block';
    }
    
    // Hide outputs
    encryptOutput.style.display = 'none';
    decryptOutput.style.display = 'none';
  });
});

// ===================================
// Encryption Function
// ===================================
encryptBtn.addEventListener('click', () => {
  const plaintext = plaintextInput.value.trim();
  const key = encryptKeyInput.value.trim();
  
  // Validation
  if (!plaintext) {
    showToast('⚠️ الرجاء إدخال النص المراد تشفيره', 'warning');
    return;
  }
  
  if (!key) {
    showToast('⚠️ الرجاء إدخال مفتاح التشفير', 'warning');
    return;
  }
  
  if (key.length < 8) {
    showToast('⚠️ يجب أن يكون المفتاح 8 أحرف على الأقل', 'warning');
    return;
  }
  
  try {
    // Add loading animation
    encryptBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10"></circle>
      </svg>
      <span>جاري التشفير...</span>
    `;
    encryptBtn.disabled = true;
    
    // Perform encryption using CryptoJS
    setTimeout(() => {
      const encrypted = CryptoJS.AES.encrypt(plaintext, key).toString();
      
      // Display result
      ciphertextOutput.textContent = encrypted;
      encryptOutput.style.display = 'block';
      
      // Scroll to output
      encryptOutput.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      
      // Reset button
      encryptBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
        <span>تشفير النص</span>
      `;
      encryptBtn.disabled = false;
      
      showToast('✅ تم التشفير بنجاح!', 'success');
    }, 500);
    
  } catch (error) {
    console.error('Encryption error:', error);
    showToast('❌ حدث خطأ أثناء التشفير', 'error');
    
    encryptBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
      <span>تشفير النص</span>
    `;
    encryptBtn.disabled = false;
  }
});

// ===================================
// Decryption Function
// ===================================
decryptBtn.addEventListener('click', () => {
  const ciphertext = ciphertextInput.value.trim();
  const key = decryptKeyInput.value.trim();
  
  // Validation
  if (!ciphertext) {
    showToast('⚠️ الرجاء إدخال النص المشفر', 'warning');
    return;
  }
  
  if (!key) {
    showToast('⚠️ الرجاء إدخال مفتاح فك التشفير', 'warning');
    return;
  }
  
  try {
    // Add loading animation
    decryptBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10"></circle>
      </svg>
      <span>جاري فك التشفير...</span>
    `;
    decryptBtn.disabled = true;
    
    // Perform decryption using CryptoJS
    setTimeout(() => {
      const decrypted = CryptoJS.AES.decrypt(ciphertext, key);
      const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
      
      if (!decryptedText) {
        throw new Error('Invalid key or corrupted ciphertext');
      }
      
      // Display result
      decryptedTextOutput.textContent = decryptedText;
      decryptOutput.style.display = 'block';
      
      // Scroll to output
      decryptOutput.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      
      // Reset button
      decryptBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <span>فك التشفير</span>
      `;
      decryptBtn.disabled = false;
      
      showToast('✅ تم فك التشفير بنجاح!', 'success');
    }, 500);
    
  } catch (error) {
    console.error('Decryption error:', error);
    showToast('❌ فشل فك التشفير - تأكد من صحة المفتاح والنص المشفر', 'error');
    
    decryptBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
      <span>فك التشفير</span>
    `;
    decryptBtn.disabled = false;
  }
});

// ===================================
// Copy to Clipboard Functions
// ===================================
copyCipherBtn.addEventListener('click', () => {
  copyToClipboard(ciphertextOutput.textContent, 'تم نسخ النص المشفر!');
});

copyDecryptedBtn.addEventListener('click', () => {
  copyToClipboard(decryptedTextOutput.textContent, 'تم نسخ النص الأصلي!');
});

function copyToClipboard(text, message) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(message, 'success');
  }).catch(err => {
    console.error('Copy failed:', err);
    showToast('❌ فشل النسخ', 'error');
  });
}

// ===================================
// Toast Notification
// ===================================
function showToast(message, type = 'success') {
  toastMessage.textContent = message;
  
  // Change toast color based on type
  if (type === 'success') {
    toast.style.backgroundColor = '#10B981';
  } else if (type === 'warning') {
    toast.style.backgroundColor = '#F59E0B';
  } else if (type === 'error') {
    toast.style.backgroundColor = '#EF4444';
  }
  
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ===================================
// Add CSS for spinning animation
// ===================================
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);
