import ImageWithHoverEffect from "./ImageWithHoverEffect.jsx";

const Demo = () => {
  const demoTopContent = () => (
    <div className="flex items-center justify-center h-full">
      <div className="bg-black bg-opacity-50 text-white p-4 rounded-lg transform transition-all duration-300 group-hover:scale-110">
        <h3 className="text-lg font-bold">Hover Content</h3>
        <p className="text-sm">This appears on top!</p>
      </div>
    </div>
  );

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold text-center mb-8">
        Image Hover Effect Demo
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Fade Effect */}
        <div className="space-y-2">
          <h3 className="font-semibold text-center">Fade Effect</h3>
          <div className="h-64 border rounded-lg overflow-hidden">
            <ImageWithHoverEffect
              topImage="https://images.pexels.com/photos/33238710/pexels-photo-33238710.jpeg?_gl=1*1msz6gc*_ga*MTc0NDYzNDY4NC4xNzU0NjQ4ODM0*_ga_8JE65Q40S6*czE3NTQ2NDg4MzMkbzEkZzEkdDE3NTQ2NDg4MzkkajU0JGwwJGgw"
              bottomImage="https://images.pexels.com/photos/31211049/pexels-photo-31211049.jpeg?_gl=1*se6p4s*_ga*MTc0NDYzNDY4NC4xNzU0NjQ4ODM0*_ga_8JE65Q40S6*czE3NTQ2NDg4MzMkbzEkZzEkdDE3NTQ2NDg4ODgkajUkbDAkaDA."
              topImageAlt="Mountain landscape"
              bottomImageAlt="Desert landscape"
              swapOnHover={false}
              hoverEffect="fade"
              renderTopContent={() => (
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded">
                  <span className="text-sm font-medium">Fade</span>
                </div>
              )}
            />
          </div>
        </div>

        {/* Slide Up Effect */}
        <div className="space-y-2">
          <h3 className="font-semibold text-center">Slide Up Effect</h3>
          <div className="h-64 border rounded-lg overflow-hidden">
            <ImageWithHoverEffect
              topImage="https://images.pexels.com/photos/33238710/pexels-photo-33238710.jpeg?_gl=1*1msz6gc*_ga*MTc0NDYzNDY4NC4xNzU0NjQ4ODM0*_ga_8JE65Q40S6*czE3NTQ2NDg4MzMkbzEkZzEkdDE3NTQ2NDg4MzkkajU0JGwwJGgw"
              bottomImage="https://images.pexels.com/photos/31211049/pexels-photo-31211049.jpeg?_gl=1*se6p4s*_ga*MTc0NDYzNDY4NC4xNzU0NjQ4ODM0*_ga_8JE65Q40S6*czE3NTQ2NDg4MzMkbzEkZzEkdDE3NTQ2NDg4ODgkajUkbDAkaDA."
              topImageAlt="Desert landscape"
              bottomImageAlt="Mountain landscape"
              hoverEffect="slideUp"
              renderTopContent={() => (
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded">
                  <span className="text-sm font-medium">Slide Up</span>
                </div>
              )}
            />
          </div>
        </div>

        {/* Scale Effect */}
        <div className="space-y-2">
          <h3 className="font-semibold text-center">Scale Effect</h3>
          <div className="h-64 border rounded-lg overflow-hidden">
            <ImageWithHoverEffect
              topImage="https://images.pexels.com/photos/33238710/pexels-photo-33238710.jpeg?_gl=1*1msz6gc*_ga*MTc0NDYzNDY4NC4xNzU0NjQ4ODM0*_ga_8JE65Q40S6*czE3NTQ2NDg4MzMkbzEkZzEkdDE3NTQ2NDg4MzkkajU0JGwwJGgw"
              bottomImage="https://images.pexels.com/photos/31211049/pexels-photo-31211049.jpeg?_gl=1*se6p4s*_ga*MTc0NDYzNDY4NC4xNzU0NjQ4ODM0*_ga_8JE65Q40S6*czE3NTQ2NDg4MzMkbzEkZzEkdDE3NTQ2NDg4ODgkajUkbDAkaDA."
              topImageAlt="Mountain landscape"
              bottomImageAlt="Desert landscape"
              hoverEffect="scale"
              renderTopContent={() => (
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded">
                  <span className="text-sm font-medium">Scale</span>
                </div>
              )}
            />
          </div>
        </div>
      </div>

      {/* Custom Content Example */}
      <div className="space-y-2">
        <h3 className="font-semibold text-center">
          With Custom Overlay Content
        </h3>
        <div className="h-80 max-w-md mx-auto border rounded-lg overflow-hidden">
          <ImageWithHoverEffect
            topImage="https://images.pexels.com/photos/33238710/pexels-photo-33238710.jpeg?_gl=1*1msz6gc*_ga*MTc0NDYzNDY4NC4xNzU0NjQ4ODM0*_ga_8JE65Q40S6*czE3NTQ2NDg4MzMkbzEkZzEkdDE3NTQ2NDg4MzkkajU0JGwwJGgw"
            bottomImage="https://images.pexels.com/photos/31211049/pexels-photo-31211049.jpeg?_gl=1*se6p4s*_ga*MTc0NDYzNDY4NC4xNzU0NjQ4ODM0*_ga_8JE65Q40S6*czE3NTQ2NDg4MzMkbzEkZzEkdDE3NTQ2NDg4ODgkajUkbDAkaDA."
            topImageAlt="Mountain landscape"
            bottomImageAlt="Desert landscape"
            hoverEffect="fade"
            renderTopContent={demoTopContent}
          />
        </div>
      </div>
    </div>
  );
};

export default Demo;
