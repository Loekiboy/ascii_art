const bwPreview = document.createElement('canvas');
const bwCtx = bwPreview.getContext('2d')
document.bodt.appendChild(bwPreview);

reader.onload = function(event) {
    const img = new Image();
    img.onload = function() {
        const width = 100;
        const height = img.height * (width / img.width);
        bwPreview.width = width;
        bwPreview.height = height;

        bwCtx.drawImage(img, 0, 0, width, height);

        const imageData = bwCtx.getImageData(0, 0, bwPreview.width, bwPreview.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
            data[i]     = avg; // R
            data[i + 1] = avg; // G
            data[i + 2] = avg; // B
    }

        bwCtx.putImageData(imageData, 0, 0);
    };
    img.src = event.target.result;
};

