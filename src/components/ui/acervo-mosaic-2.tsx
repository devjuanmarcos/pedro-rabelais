"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const AcervoMosaicCardType2 = ({ images }: { images: string[] }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleClick = (image: string) => {
    if (selectedImage === image) {
      setSelectedImage(null);
    } else {
      setSelectedImage(image);
    }
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const groupImages = () => {
    const groups = [];
    for (let i = 0; i < images.length; i += 5) {
      const group = images.slice(i, i + 5);
      groups.push(group);
    }
    return groups;
  };

  const imageGroups = groupImages();

  return (
    <div className="mosaic py-4 flex flex-col gap-1">
      {imageGroups.map((group, groupIndex) => (
        <React.Fragment key={`group-${groupIndex}`}>
          {/* Primeira linha - 3 colunas */}
          <div className="grid grid-cols-3 gap-1">
            {group.slice(0, 3).map((image: any) => (
              <div
                key={image.id || image}
                className="mosaic-item relative overflow-hidden cursor-pointer"
                onClick={() => handleClick(image)}
              >
                <div className="h-[500px] w-auto">
                  <Image
                    src={image}
                    alt={"Imagem do acervo"}
                    className="rounded-sm object-cover w-full h-full"
                    width={800}
                    height={500}
                    quality={90}
                    style={{ height: "500px", width: "100%", objectFit: "cover" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Segunda linha - 2 colunas (se houver imagens suficientes) */}
          {group.length > 3 && (
            <div className="grid grid-cols-2 gap-1">
              {group.slice(3).map((image: any) => (
                <div
                  key={image.id}
                  className="mosaic-item relative overflow-hidden cursor-pointer"
                  onClick={() => handleClick(image)}
                >
                  <div className="h-[500px] w-auto">
                    <Image
                      src={image}
                      alt={"Imagem do acervo"}
                      className="rounded-sm object-cover w-full h-full"
                      width={800}
                      height={500}
                      quality={90}
                      style={{ height: "500px", width: "100%", objectFit: "cover" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </React.Fragment>
      ))}

      {/* Modal para visualização em tela cheia */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fullscreen-image fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black bg-opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.img
              src={selectedImage}
              alt={"Imagem do acervo"}
              className="rounded-lg object-contain max-h-[90vh] max-w-[90vw]"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
