import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const KotoLanding = () => {
    const [sentiment, setSentiment] = useState("neutral");
    const [text, setText] = useState("");
    const [zenMode, setZenMode] = useState(false);

    useEffect(() => {
        const happyWords = ["love", "great", "cool", "happy", "thanks", "good"];
        const angryWords = ["hate", "bad", "stupid", "angry", "shit", "fuck"];
        
        const lowerText = text.toLowerCase();
        const isHappy = happyWords.some(w => lowerText.includes(w));
        const isAngry = angryWords.some(w => lowerText.includes(w));

        if (isAngry) setSentiment("angry");
        else if (isHappy) setSentiment("happy");
        else setSentiment("neutral");
    }, [text]);

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden relative ${zenMode ? 'zen-mode' : ''}`}>
            
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none decoration" 
                 style={{backgroundImage: "radial-gradient(#d4a373 1px, transparent 1px)", backgroundSize: "20px 20px"}}>
            </div>

            <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-20">
                <h1 className="text-4xl font-bold tracking-tighter" style={{color: "var(--color-bamboo)"}}>KOTO.</h1>
                <div className="flex gap-4 items-center">
                    <label className="swap swap-rotate text-xs text-gray-400 hover:text-white">
                        <input type="checkbox" checked={zenMode} onChange={() => setZenMode(!zenMode)} />
                        <span className="swap-on">ZEN ON</span>
                        <span className="swap-off">ZEN OFF</span>
                    </label>
                    <Link to="/login" className="btn btn-sm btn-ghost text-white border-b border-white/20 rounded-none">LOGIN</Link>
                </div>
            </div>

            <div className="z-10 w-full max-w-4xl grid md:grid-cols-2 gap-12 items-center">
                
                <div className="text-left space-y-6">
                    <h2 className="text-5xl font-light leading-tight">
                        Chat without the <br/>
                        <span className="font-serif italic" style={{color: "var(--color-matcha)"}}>cognitive debris.</span>
                    </h2>
                    <p className="text-gray-400 text-lg decoration">
                        Koto filters noise, visualizes tone, and respects your focus. 
                        Experience the first messenger designed for 
                        <span className="text-white border-b border-dashed border-gray-500 ml-1" title="WCAG 2.2 AA Compliance">neuro-inclusive</span> flow.
                    </p>
                    
                    <div className="mt-8 p-6 border border-white/5 bg-white/5 rounded-xl backdrop-blur-sm">
                        <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block">
                            Feature 01: Sentiment Texture
                        </label>
                        <p className="text-sm text-gray-300 mb-4 decoration">
                            Type below to see Koto visualize the <span className="text-white">emotional topology</span> of your message before you send.
                        </p>
                        <input 
                            type="text" 
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Try typing: 'I love this' or 'I hate this'..."
                            className={`input w-full bg-transparent text-xl focus:outline-none focus:ring-0 h-16 
                                ${sentiment === 'angry' ? 'texture-angry text-red-400' : ''}
                                ${sentiment === 'happy' ? 'texture-happy text-green-200' : ''}
                                ${sentiment === 'neutral' ? 'texture-neutral text-white' : ''}
                            `}
                        />
                         <div className="flex justify-between mt-2 text-xs text-gray-600 decoration">
                            <span>Analysis: {sentiment.toUpperCase()}</span>
                            <span>TF.js Model: v0.9</span>
                        </div>
                    </div>
                </div>

                <div className="relative h-[500px] w-full border border-white/10 rounded-full flex items-center justify-center decoration">
                    <div className="absolute inset-0 rounded-full border border-dashed border-white/5 animate-spin-slow"></div>
                    <div className="w-64 h-96 bg-black border border-gray-800 rounded-3xl p-4 flex flex-col relative overflow-hidden shadow-2xl">
                         <div className="flex-1 space-y-3 mt-8 overflow-hidden relative">
                             {zenMode && <div className="absolute inset-0 bg-black/90 z-20 flex items-center justify-center text-gray-600 text-xs tracking-widest">FOCUS MODE ACTIVE</div>}
                             
                             <div className="chat chat-start">
                                <div className="chat-bubble bg-[#2C3E30] text-gray-300 text-xs">Where are we meeting?</div>
                             </div>
                             <div className="chat chat-end">
                                <div className="chat-bubble border border-[#d4a373] bg-transparent text-[#d4a373] text-xs">At the shrine, 8 PM.</div>
                             </div>
                             <div className="chat chat-start">
                                <div className="chat-bubble bg-[#2C3E30] text-gray-300 text-xs">
                                    I am bringing the <span className="text-white border-b border-dotted">blueprints</span>.
                                </div>
                             </div>
                         </div>
                         
                         <div className="absolute bottom-1 right-2 timestamp-egg text-[#2C3E30]">
                            .45
                         </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-4 w-full text-center text-xs text-gray-700 decoration">
                <span className="mr-4">Koto © 2026</span>
                <span>Kashmir</span>
            </div>
        </div>
    );
};

export default KotoLanding;
