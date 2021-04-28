function parseMarkdown(markdownText, cid) {
    let mainFolder = 'https://ipfs.io/' + 'ipfs/' + cid + '/'
	const htmlText = markdownText
		.replace(/^### (.*$)/gim, '<h3>$1</h3>')
		.replace(/^## (.*$)/gim, '<h2>$1</h2>')
		.replace(/^# (.*$)/gim, '<h1>$1</h1>')
		
		.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
		.replace(/\*(.*)\*/gim, '<i>$1</i>')
		.replace(/\u005f(.*?)\u005f/gim, '<i>$1</i>')
		.replace(/\u0060\u0060\u0060(.*?)\u0060\u0060\u0060/gim, '<code>$1</code>')
		.replace(/\u0060(.*?)\u0060/gim, '<code>$1</code>')
		
		.replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' class='articleImage' src="  + mainFolder + "$2 />")
		.replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
		.replace(/\n$/gim, '<br />')

	return htmlText.trim()
}
