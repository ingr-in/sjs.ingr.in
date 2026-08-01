@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", Roboto, system-ui, sans-serif;
  background: linear-gradient(145deg, #f0f4fa 0%, #d9e2ef 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

#app {
  max-width: 780px;
  width: 100%;
  position: relative;
  overflow:scroll;
}

/* ----- CARD WRAPPER (slider) ----- */
.card-slider {
  position: relative;
  width: 100%;
  background: transparent;
  border-radius: 48px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 20, 40, 0.2);
  transition: box-shadow 0.3s ease;
}

.card-slider:hover {
  box-shadow: 0 40px 80px rgba(102, 126, 234, 0.25);
}

.cards-track {
  display: flex;
  flex-wrap: nowrap;
  transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
  will-change: transform;
  width: 100%;
}

/* each card takes full width - FIXED HEIGHT with scroll */
.card {
  flex: 0 0 100%;
  height: 540px;
  background: #ffffff;
  padding: 32px 30px 34px;
  border-radius: 48px;
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.6);
  transition: background 0.2s;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Prevent content from spilling out */
}

/* Card content wrapper with scroll */
.card-content {
  flex: 1;
  overflow-y: auto;
  padding-right: 4px;
  margin-right: -4px;
}

/* Custom scrollbar for card content */
.card-content::-webkit-scrollbar {
  width: 6px;
}

.card-content::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 10px;
}

.card-content::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}

.card-content::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Search results container with scroll */
.search-results {
  flex: 1;
  overflow-y: auto;
  padding-right: 4px;
  margin-top: 16px;
  display: none;
}

.search-results::-webkit-scrollbar {
  width: 6px;
}

.search-results::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 10px;
}

.search-results::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}

.search-results::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* --- navigation dots + arrows (app style) --- */
.nav-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-top: 24px;
  padding: 0 8px;
}

.nav-btn {
  background: #ffffffcc;
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 60px;
  padding: 12px 26px;
  font-weight: 600;
  font-size: 1rem;
  color: #1e293b;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.04);
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  letter-spacing: 0.3px;
  border: 1px solid #eef2f6;
  background: rgba(255, 255, 255, 0.8);
}

.nav-btn i {
  font-size: 1rem;
  color: #667eea;
}

.nav-btn:hover:not(:disabled) {
  transform: translateY(-3px) scale(1.02);
  background: #ffffff;
  box-shadow: 0 14px 28px rgba(102, 126, 234, 0.2);
  border-color: #667eea;
}

.nav-btn:active:not(:disabled) {
  transform: scale(0.96);
}

.nav-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.dots {
  display: flex;
  gap: 12px;
  align-items: center;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 40px;
  background: #cbd5e1;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: none;
  padding: 0;
  cursor: pointer;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.02);
}

.dot.active {
  background: #667eea;
  width: 32px;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
}

.dot:hover {
  background: #667eea;
  transform: scale(1.15);
}

/* ----- CARD CONTENT (intro, search, profile, repos) ----- */
.card-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.02em;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.card-sub {
  color: #475569;
  font-weight: 400;
  margin-bottom: 16px;
}

/* intro card */
.intro-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 4px solid white;
  box-shadow: 0 12px 24px rgba(102, 126, 234, 0.25);
  object-fit: cover;
  margin-bottom: 12px;
  transition: transform 0.3s;
}

.intro-avatar:hover {
  transform: scale(1.04);
}

.intro-text h1 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #0f172a;
}

.intro-text h1 span {
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.intro-text .bio {
  color: #334155;
  margin-top: 8px;
  line-height: 1.5;
  font-size: 1.05rem;
}

.social-row {
  display: flex;
  gap: 14px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.social-row a {
  background: #f1f5f9;
  width: 48px;
  height: 48px;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1e293b;
  font-size: 1.3rem;
  transition: all 0.2s ease;
  text-decoration: none;
  border: 1px solid transparent;
}

.social-row a:hover {
  background: #667eea;
  color: white;
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(102, 126, 234, 0.25);
  border-color: #667eea;
}

/* search card */
.search-box {
  display: flex;
  flex-direction: column;
  gap: 18px;
  flex-shrink: 0; /* Don't shrink the search box */
}

.search-box .input-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.search-box input {
  flex: 1;
  padding: 16px 22px;
  border: 2px solid #e2e8f0;
  border-radius: 60px;
  font-size: 1rem;
  background: #f8fafc;
  transition: 0.2s;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.02);
  min-width: 180px;
}

.search-box input:focus {
  outline: none;
  border-color: #667eea;
  background: white;
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.15);
}

.search-box .app-btn {
  padding: 16px 32px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 60px;
  font-weight: 600;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.search-box .app-btn:hover:not(:disabled) {
  transform: translateY(-4px);
  box-shadow: 0 16px 32px rgba(102, 126, 234, 0.4);
}

.search-box .app-btn:active:not(:disabled) {
  transform: scale(0.96);
}

.search-box .app-btn:disabled {
  background: #b0b8c5;
  box-shadow: none;
  cursor: not-allowed;
  transform: none;
}

.example-hint {
  color: #64748b;
  font-size: 0.95rem;
  margin-top: 4px;
  flex-shrink: 0;
}

.example-hint .example {
  background: #eef2f6;
  padding: 2px 10px;
  border-radius: 12px;
  font-weight: 500;
  color: #475569;
}

/* loading & error inside card */
.loading,
.error-message {
  text-align: center;
  padding: 20px 0;
}
.loading {
  display: none;
}
.loading.active {
  display: block;
}
.spinner {
  border: 5px solid #e9eef3;
  border-top: 5px solid #667eea;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  animation: spin 0.8s linear infinite;
  margin: 8px auto 12px;
}

.error-message {
  background: #fef2f2;
  color: #b91c1c;
  padding: 14px 18px;
  border-radius: 60px;
  border: 1px solid #fecaca;
  display: none;
  font-weight: 500;
  margin: 8px 0;
}
.error-message.show {
  display: block;
}

/* profile card (user + repos) */
.profile-container {
  display: none;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}
.profile-container.active {
  display: flex;
}

.user-profile {
  background: #fafcff;
  border-radius: 28px;
  padding: 20px 22px 14px;
  border: 1px solid #eef2f6;
  margin-bottom: 6px;
}

.user-info {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
}

.user-avatar {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 3px solid white;
  box-shadow: 0 6px 14px rgba(102, 126, 234, 0.15);
  object-fit: cover;
  background: #f1f5f9;
}

.user-details h3 {
  font-size: 1.6rem;
  font-weight: 700;
  color: #0f172a;
}

.user-details .username {
  color: #667eea;
  font-weight: 500;
  text-decoration: none;
  font-size: 1rem;
}
.user-details .username:hover {
  text-decoration: underline;
}
.user-bio {
  color: #334155;
  margin-top: 4px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin: 16px 0 6px;
}

.stat-item {
  background: white;
  padding: 12px 4px;
  border-radius: 20px;
  text-align: center;
  border: 1px solid #eef2f6;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
}

.stat-item i {
  color: #667eea;
  font-size: 1.2rem;
  display: block;
  margin-bottom: 2px;
}
.stat-value {
  font-size: 1.3rem;
  font-weight: 700;
  color: #0f172a;
}
.stat-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  color: #64748b;
  letter-spacing: 0.3px;
}

.repos-section {
  margin-top: 6px;
}
.repos-section h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #0f172a;
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 12px;
}

.repos-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.repo-card {
  background: white;
  border-radius: 20px;
  padding: 14px 16px;
  border: 1px solid #edf2f7;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
}

.repo-card:hover {
  transform: translateY(-4px);
  border-color: #667eea;
  box-shadow: 0 12px 24px rgba(102, 126, 234, 0.08);
}

.repo-name {
  font-weight: 700;
  color: #1e293b;
  display: flex;
  gap: 6px;
  align-items: center;
}
.repo-name i {
  color: #667eea;
}
.repo-description {
  font-size: 0.85rem;
  color: #475569;
  margin: 6px 0 8px;
  line-height: 1.3;
}
.repo-stats {
  display: flex;
  gap: 12px;
  font-size: 0.8rem;
  color: #64748b;
}
.repo-stats span {
  display: flex;
  align-items: center;
  gap: 4px;
}

/* responsive */
@media (max-width: 600px) {
  .card {
    padding: 24px 18px;
    height: 480px;
  }
  .stats {
    grid-template-columns: 1fr 1fr;
  }
  .repos-grid {
    grid-template-columns: 1fr;
  }
  .intro-text h1 {
    font-size: 1.8rem;
  }
  .search-box .input-group {
    flex-direction: column;
  }
  .search-box .app-btn {
    width: 100%;
    justify-content: center;
  }
  .nav-btn {
    padding: 10px 18px;
    font-size: 0.9rem;
  }
  .user-info {
    justify-content: center;
    text-align: center;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}