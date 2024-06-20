"use client";

import FlowersDecoration from "@/components/design-system/FlowersDecoration";
import Heading from "@/components/design-system/Headings";
import Loading from "@/components/design-system/Loading";
import { BucketName } from "@/utils/enums/bucket";
import { Pagination } from "antd";
import { FC, useEffect, useState } from "react";

const PhotoGallery: FC<{
  getImagesUrlFromStorage: (bucket: BucketName) => Promise<string[]>;
}> = ({ getImagesUrlFromStorage }) => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(8);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchPhotos() {
      setLoading(true);
      try {
        const photosUrls: string[] = await getImagesUrlFromStorage(
          BucketName.IMAGES
        );
        setPhotos(photosUrls);
      } catch (error) {
        console.error("Error fetching photos:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPhotos();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const handlePageChange = (page: number, pageSize?: number) => {
    setCurrentPage(page);
    if (pageSize) {
      setPageSize(pageSize);
    }
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPhotos = photos.slice(startIndex, endIndex);

  return (
    <div className="w-4/5 mx-auto py-6">
      <Heading level={2}>Galerie photos</Heading>
      <div className="pt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
          <FlowersDecoration variant="topLeft" />
          {currentPhotos.map((photo, index) => (
            <div key={index} className="relative aspect-square">
              <img
                src={photo}
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={photos.length}
            onChange={handlePageChange}
            showSizeChanger={false}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
