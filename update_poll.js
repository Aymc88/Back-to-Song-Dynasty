const fs = require('fs');

let content = fs.readFileSync('app/components/Poll.tsx', 'utf8');

// Replace firearms with pearls
content = content.replace(/firearms/g, 'pearls');
content = content.replace(/火 Firearms/g, '珠 Pearls');

// Add the button
const buttonHtml = `
          <div className="mt-8 pt-6 border-t border-ink/10">
            <h4 className="font-display text-xl text-ink mb-4">Phase 2: The Wealth Simulation</h4>
            <p className="text-sm text-inkSoft mb-4">You have made your choice. Now, can you amass a fortune before the Jurchen army arrives?</p>
            <a 
              href="/game.html" 
              className="inline-block px-8 py-3 bg-cinnabar text-white hover:bg-red-700 transition-colors uppercase tracking-widest text-sm font-display rounded-sm shadow-lg"
            >
              Start Simulation
            </a>
          </div>
        </div>
      )}
`;

content = content.replace('</div>\n      )}\n', buttonHtml);

fs.writeFileSync('app/components/Poll.tsx', content);

let pageContent = fs.readFileSync('app/page.tsx', 'utf8');
pageContent = pageContent.replace(/FIREARMS/g, 'PEARLS');
pageContent = pageContent.replace(/One breech-loading flintlock pistol\. Twelve paper cartridges\. One cleaning rod\. Twelve chances to change history\. Then silence\./g, 'A burlap sack overflowing with massive, flawless, artificial pearls from the future. Instant immense wealth.');
pageContent = pageContent.replace(/<span className="seal">火<\/span>/g, '<span className="seal">珠</span>');
pageContent = pageContent.replace(/The Manual/g, 'The Pearls');
pageContent = pageContent.replace(/火药 · The Powder/g, '珍珠 · The Pearl');

fs.writeFileSync('app/page.tsx', pageContent);

console.log('Updated Poll.tsx and page.tsx successfully');
