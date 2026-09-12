export default async function handler(req, res) {
  const githubUrl = "https://raw.githubusercontent.com/ancelisrich/blyxohub/refs/heads/main/stealanegg.lua";
  
  const response = await fetch(githubUrl, {
    headers: { "Cache-Control": "no-cache" }
  });
  const luaCode = await response.text();

  // Force plain text output and disable all Vercel edge caching
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  
  return res.status(200).send(luaCode);
}
