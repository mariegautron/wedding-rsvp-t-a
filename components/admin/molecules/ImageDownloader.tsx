"use client";

import { FC, useEffect, useState } from "react";
import { Button, Spin, Typography } from "antd";
import { DownloadOutlined, EyeOutlined, LinkOutlined } from "@ant-design/icons";
import { BucketName } from "@/utils/enums/bucket";

const { Paragraph } = Typography;

const ImageDownloader: FC<{
  getImagesUrlFromStorage: (bucket: BucketName) => Promise<string[]>;
  type: BucketName;
}> = ({ getImagesUrlFromStorage, type }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchImage() {
      setLoading(true);
      try {
        const data: string[] = await getImagesUrlFromStorage(type);
        setImageUrl(data[0]);
      } catch (error) {
        console.error("Error fetching image:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchImage();
  }, [getImagesUrlFromStorage, type]);

  if (loading) {
    return <Spin />;
  }

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-center w-full mb-4">
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          onClick={() => window.open(imageUrl!, "_blank")}
          className="w-full"
        >
          Télécharger l'image
        </Button>
      </div>
      {imageUrl && (
        <Paragraph className="mt-2 text-center">
          <a
            href={imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            <EyeOutlined className="mr-1" />
            Voir l'image
          </a>
        </Paragraph>
      )}
      <div className="flex items-center justify-center w-full mt-4">
        <Button
          href="/menu"
          icon={<LinkOutlined />}
          className="w-full"
          target="_blank"
        >
          Aller à la page web du {type}
        </Button>
      </div>
    </div>
  );
};

export default ImageDownloader;
