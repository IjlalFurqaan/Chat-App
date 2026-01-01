import { useState, useEffect } from "react";

const KotoTeaser = () => {
    const [scene, setScene] = useState(0); 
    const [text, setText] = useState("");
    const [zenOn, setZenOn] = useState(false);

    useEffect(() => {
        const timeline = [
            { t: 0, action: () => setScene(0) },
            { t: 100, action: () => typeText("I hate waiting for replies...", 50) },
            { t: 3000, action: () => { setScene(1); setText(""); } }, 
            { t: 3500, action: () => typeText("love", 150) },
            { t: 5000, action: () => setScene(2) }, 
            { t: 7000, action: () => setScene(3) }, 
            { t: 7500, action: () => triggerToggle() },
            { t: 8500, action: () => setScene(4) }, 
            { t: 8800, action: () => setScene(5) }  
        ];

        timeline.forEach(event => {
            setTimeout(event.action, event.t);
        });
    }, []);

    const typeText = (str, speed) => {
        let i = 0;
        const interval = setInterval(() => {
            setText(str.slice(0, i + 1));
            i++;
            if (i >= str.length) clearInterval(interval);
        }, speed);
    };

    const triggerToggle = () => {
        let toggles = 0;
        const interval = setInterval(() => {
            setZenOn(prev => !prev);
            toggles++;
            if (toggles >= 3) clearInterval(interval);
        }, 100); 
    };

    const birthday = ".45"; 

    return (
        <div className="w-full h-screen bg-black flex items-center justify-center overflow-hidden">
            <div className="relative w-[540px] h-[960px] bg-black overflow-hidden flex flex-col items-center justify-center shadow-2xl border border-gray-800">
                
                {scene === 0 && (
                    <div className="text-white font-mono text-xl animate-type pr-1">
                        {text}
                    </div>
                )}

                {scene === 1 && (
                    <div className="relative">
                        <input 
                            type="text" 
                            value={text} 
                            readOnly 
                            className={`bg-transparent text-center text-3xl text-white border-b-2 outline-none w-64 h-16 transition-all duration-300 ${text === 'love' ? 'animate-brush' : 'border-white'}`}
                        />
                    </div>
                )}

                {scene === 2 && (
                    <div className="animate-logo flex flex-col items-center">
                         <div className="text-6xl text-[var(--color-matcha)] font-bold mb-4">古都</div>
                         <div className="text-xl text-white tracking-[0.5em] uppercase">Koto</div>
                    </div>
                )}

                {scene === 3 && (
                    <div className="transform rotate-90 transition-all duration-500">
                        <label className="swap swap-rotate scale-150 text-white">
                            <input type="checkbox" checked={zenOn} readOnly />
                            <div className="swap-on">ZEN ON</div>
                            <div className="swap-off text-gray-500">ZEN OFF</div>
                        </label>
                    </div>
                )}

                {scene === 4 && (
                    <div className="absolute inset-0 bg-[var(--color-matcha)] flex items-center justify-center animate-flash z-50">
                        <h1 className="text-white text-6xl font-black text-center leading-tight">
                            27% <br/>
                            <span className="text-2xl font-light">FASTER CALM-DOWN</span>
                        </h1>
                    </div>
                )}

                {scene === 5 && (
                    <div className="w-full h-full flex flex-col items-center justify-between py-24 bg-[var(--color-sumi)]">
                        <div className="flex-1 flex items-center justify-center">
                            <h1 className="text-8xl font-black text-white tracking-tighter animate-vhs">
                                KOTO.
                            </h1>
                        </div>
                        <div className="space-y-4 text-center">
                            <p className="text-gray-400 text-sm font-mono">Built in 48h with React + SVG filters</p>
                            <p className="text-[var(--color-matcha)] text-xs opacity-50 font-mono animate-pulse">
                                Timestamp: {Math.floor(Date.now() / 1000)}:{birthday}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default KotoTeaser;