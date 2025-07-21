import React from "react";

const PrivacyPolicy = () => {
    return (
        <section style={{backgroundColor: '#fff', minHeight: '60vh', flexDirection: 'column', justifyContent: 'flex-start', display: 'flex', padding: '32px 0', width: '100vw'}}>
            <style>{`
                @media (max-width: 900px) {
                    .privacy-container {
                        max-width: 98vw !important;
                        padding-left: 2vw !important;
                        padding-right: 2vw !important;
                    }
                }
                @media (max-width: 600px) {
                    .privacy-container {
                        max-width: 100vw !important;
                        padding-left: 4vw !important;
                        padding-right: 4vw !important;
                    }
                    .privacy-title {
                        font-size: 1.5rem !important;
                        margin-bottom: 16px !important;
                    }
                    .privacy-section {
                        font-size: 0.98rem !important;
                        line-height: 1.5 !important;
                    }
                    .privacy-list {
                        font-size: 0.98rem !important;
                        padding-left: 16px !important;
                    }
                }
            `}</style>
            <div className="privacy-title" style={{fontSize: 32, fontWeight: 700, marginBottom: 24, color: '#00215b', textAlign: 'center', fontFamily: 'Montserrat, Arial, sans-serif'}}>Privacy Policy</div>
            <div className="privacy-container privacy-section" style={{maxWidth: 900, margin: '0 auto', color: '#333', fontSize: 16, lineHeight: 1.7, textAlign: 'justify', fontFamily: 'Arial, sans-serif', paddingLeft: 0, paddingRight: 0}}>
                <p><strong>Effective Date:</strong> July 08, 2024</p>
                <p>
                    Welcome to Alex Healthcare System, a leading provider of hospital construction, modular OT/ICU setups, medical gas pipeline systems, regulatory support, and equipment solutions across Northeast India. (“we”, “us”, “our”). This Privacy Policy explains how we collect, use, share, and protect information when you:
                </p>
                <ul className="privacy-list" style={{marginLeft: 24, listStyleType: 'disc', paddingLeft: 20}}>
                    <li>Visit or use our website: <a href="https://www.alexhealthcaresystem.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb", textDecoration: "underline", fontWeight: 500 }}>https://www.alexhealthcaresystem.com/</a></li>
                    <li>Submit enquiry or quote request forms</li>
                    <li>Interact with our ads or marketing campaigns (e.g. Google Ads, Meta Lead Ads)</li>
                </ul>

                <h2 style={{marginTop: 32, color: '#b02636', fontSize: 22, fontWeight: 700}}>1. Information We Collect</h2>
                <h3 style={{marginTop: 16, fontWeight: 600}}>A. Personal & Contact Information</h3>
                <p>When you request a quote or contact us, we may collect:</p>
                <ul className="privacy-list" style={{marginLeft: 24, listStyleType: 'disc', paddingLeft: 20}}>
                    <li>Name, organization, role, email, phone, city/state, and project details.</li>
                </ul>
                <h3 style={{marginTop: 16, fontWeight: 600}}>B. Technical & Usage Data</h3>
                <p>Collected automatically:</p>
                <ul className="privacy-list" style={{marginLeft: 24, listStyleType: 'disc', paddingLeft: 20}}>
                    <li>IP address, browser/device type, visited pages, session timestamps, referring URLs.</li>
                    <li>Collected via cookies, web beacons, Google Analytics, Meta Pixel.</li>
                </ul>
                <h3 style={{marginTop: 16, fontWeight: 600}}>C. Marketing & Interaction Data</h3>
                <p>Includes clicks on ads, impressions, form completions via Google or Meta platforms.</p>

                <h2 style={{marginTop: 32, color: '#b02636', fontSize: 22, fontWeight: 700}}>2. How We Use Your Information</h2>
                <p>We use your data to:</p>
                <ol className="privacy-list" style={{marginLeft: 24, paddingLeft: 20, listStyleType: 'decimal'}}>
                    <li>Respond to queries, provide consults, estimates, and project support</li>
                    <li>Send confirmations, updates, and project-related communication</li>
                    <li>Personalize your experience and content</li>
                    <li>Track ad performance and improve marketing effectiveness</li>
                    <li>Monitor website performance and enhance security/user experience</li>
                </ol>

                <h2 style={{marginTop: 32, color: '#b02636', fontSize: 22, fontWeight: 700}}>3. Legal Basis for Processing</h2>
                <ul className="privacy-list" style={{marginLeft: 24, listStyleType: 'disc', paddingLeft: 20}}>
                    <li>Consent – when you submit forms or agree to be contacted</li>
                    <li>Legitimate interests – for website improvement and marketing</li>
                    <li>Legal obligations – handling regulatory or compliance-related data requests</li>
                </ul>

                <h2 style={{marginTop: 32, color: '#b02636', fontSize: 22, fontWeight: 700}}>4. Cookies & Tracking Technologies</h2>
                <p>Our site uses cookies and similar technologies to:</p>
                <ul className="privacy-list" style={{marginLeft: 24, listStyleType: 'disc', paddingLeft: 20}}>
                    <li>Analyze site interactions and visitor behavior</li>
                    <li>Enhance functionality and personalize marketing content</li>
                    <li>Enable remarketing across Google and Meta platforms</li>
                </ul>
                <p>You can manage preferences via your browser settings or disable cookies.</p>
                <ul className="privacy-list" style={{marginLeft: 24, listStyleType: 'disc', paddingLeft: 20}}>
                    <li>Google Ads settings in your Google account</li>
                    <li>Meta Ad Preferences through Facebook/Instagram</li>
                </ul>

                <h2 style={{marginTop: 32, color: '#b02636', fontSize: 22, fontWeight: 700}}>5. How We Share Your Information</h2>
                <p>We <strong>DO NOT</strong> sell your personal data. We share your info only with:</p>
                <ul className="privacy-list" style={{marginLeft: 24, listStyleType: 'disc', paddingLeft: 20}}>
                    <li>Service providers (e.g. hosting, CRM, analytics, quoting tools)</li>
                    <li>Advertising partners (Google, Meta) for ad targeting and analytics</li>
                    <li>Legal authorities if required by law or court order</li>
                </ul>
                <p>These partners are subject to strict confidentiality and data protection agreements.</p>

                <h2 style={{marginTop: 32, color: '#b02636', fontSize: 22, fontWeight: 700}}>6. Your Rights & Choices</h2>
                <p>Depending on your jurisdiction, you have rights to:</p>
                <ul className="privacy-list" style={{marginLeft: 24, listStyleType: 'disc', paddingLeft: 20}}>
                    <li>Request access to the data we hold</li>
                    <li>Correct or update inaccuracies</li>
                    <li>Request deletion of your personal information</li>
                    <li>Withdraw consent for marketing communications</li>
                    <li>Disable cookies via browser settings</li>
                </ul>
                <p>To exercise your rights, please contact:</p>
                <div style={{marginLeft: 16, marginBottom: 16, maxWidth: 350}}>
                    <div style={{textAlign: 'left'}}>Email: <a href="mailto:alexhealthcare10@gmail.com">alexhealthcare10@gmail.com</a></div>
                    <div style={{textAlign: 'left'}}>Contact Number: +91 7002394679</div>
                </div>

                <h2 style={{marginTop: 32, color: '#b02636', fontSize: 22, fontWeight: 700}}>7. Data Security & Retention</h2>
                <p>We implement technical and organizational measures—like encryption, access controls, periodic audits, and secure hosting—to safeguard your info. We retain data only as long as needed for its original purpose or to comply with legal obligations.</p>

                <h2 style={{marginTop: 32, color: '#b02636', fontSize: 22, fontWeight: 700}}>8. Third-Party Websites & Integrations</h2>
                <p>We may link to or embed third-party services (e.g., payment gateways, regulatory portals, Google Maps). We are not responsible for their privacy practices; please review their respective privacy policies.</p>

                <h2 style={{marginTop: 32, color: '#b02636', fontSize: 22, fontWeight: 700}}>9. Children’s Privacy</h2>
                <p>Our services are intended for businesses and professionals. We do not knowingly collect data from minors.</p>

                <h2 style={{marginTop: 32, color: '#b02636', fontSize: 22, fontWeight: 700}}>10. Updates to this Policy</h2>
                <p>This Privacy Policy may be updated periodically. We will reflect changes by updating the “Effective Date.” We encourage you to revisit this page occasionally.</p>

                <h2 style={{marginTop: 32, color: '#b02636', fontSize: 22, fontWeight: 700}}>11. Contact Us</h2>
                <p>For any privacy-related questions or requests:</p>
                <ul className="privacy-list" style={{marginLeft: 24, listStyleType: 'disc', paddingLeft: 20}}>
                    <li>Alex Healthcare System</li>
                    <li>Serving hospitals, clinics, and healthcare projects across Northeast India</li>
                    <li>Email: <a href="mailto:alexhealthcare10@gmail.com">alexhealthcare10@gmail.com</a></li>
                    <li>Contact Number: +91 7002394679</li>
                    <li><a href="https://www.alexhealthcaresystem.com" target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb", textDecoration: "underline", fontWeight: 500 }}>https://www.alexhealthcaresystem.com</a></li>
                </ul>
            </div>
        </section>
    );
};

export default PrivacyPolicy; 