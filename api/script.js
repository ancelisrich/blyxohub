export default async function handler(req, res) {
  const userAgent = req.headers["user-agent"] || "";

  // Reject standard web browsers
  if (userAgent.includes("Mozilla") || userAgent.includes("Chrome") || userAgent.includes("Safari")) {
    return res.status(403).send("Access Denied");
  }

  const githubUrl = "https://raw.githubusercontent.com/ancelisrich/blyxohub/refs/heads/main/stealanegg.lua";
  const response = await fetch(githubUrl, {
    headers: { "Cache-Control": "no-cache" }
  });
  const luaCode = await response.text();

  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  return res.status(200).send(luaCode);
}
