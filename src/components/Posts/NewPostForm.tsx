import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  Stack,
  Textarea,
  Image,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Text,
} from "@chakra-ui/react";
import { User } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { BiPoll } from "react-icons/bi";
import { BsLink45Deg, BsMic } from "react-icons/bs";
import { IoDocumentText, IoImageOutline } from "react-icons/io5";
import { AiFillCloseCircle } from "react-icons/ai";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { it } from "node:test";
import Tabitem from "./TabItem";
import TextInputs from "./PostForm/TextInputs";
import ImageUpload from "./PostForm/ImageUpload";
import { Post } from "@/src/atoms/postsAtom";
import { Timestamp } from "firebase/firestore";
import { firestore, storage } from "@/src/firebase/clientApp";
 
 type NewPostFormProps = {
  user: User;
 };

const formTabs: TabItem[] = [
    {
      title: "Post",
      icon: IoDocumentText,
    },
    {
      title: "Images & Video",
      icon: IoImageOutline,
    },
    {
      title: "Link",
      icon: BsLink45Deg,
    },
    {
      title: "Poll",
      icon: BiPoll,
    },
    {
      title: "Talk",
      icon: BsMic,
    },
  ];

  export type TabItem = {
    title: string;
    icon: typeof Icon.arguments;
  }
 
 const NewPostForm:React.FC<NewPostFormProps> = ({ user }) => {

    const [selectedTab, setSelectedTab] = useState(formTabs[0].title);
    const [textInputs, setTextInputs] = useState({
        title: "",
        body: "",
      });
      const [selectedFile, setSelectedFile] = useState<string>();
      const selectFileRef = useRef<HTMLInputElement>(null);
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(false);
      const router = useRouter();
    //   const setPostItems = useSetRecoilState(postState);

    const handleCreatePost = async () => {

      const {communityId} = router.query;

      // create new post object => type Post
      const newPost: Post = {
        communityId: communityId as string,
        creatorId: user?.uid,
        creatorDisplayName: user.email!.split("@")[0],
        title: textInputs.title,
        body: textInputs.body,
        numberOfComments: 0,
        voteStatus: 0,
        createdAt: serverTimestamp() as Timestamp
      };

      setLoading(true)
      try {
        // store the post in db
        const postDocRef = await addDoc(collection(firestore,"posts"),newPost);
        // check for selectedFile
        // store in storage => getDownloadURL (return image URL)
        
        if (selectedFile) {
          const imageRef = ref(storage, `posts/${postDocRef.id}/image`);
          await uploadString(imageRef, selectedFile, "data_url");
          const downloadURL = await getDownloadURL(imageRef);

          //update post by adding image url

          await updateDoc(postDocRef, {
            imageURL: downloadURL,
          });
          // redirect the user back to the communitypage using the router
          router.back();
          console.log("HERE IS DOWNLOAD URL", downloadURL);
        }
        
      } catch (error: any) {
        console.log("handleCreatePost error", error.message);
        setError(true);
      }
      setLoading(false)
      
      
    };

    const onSelectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
      const reader = new FileReader();
      if (event.target.files?.[0]) {
        reader.readAsDataURL(event.target.files[0]);
      }
  
      reader.onload = (readerEvent) => {
        if (readerEvent.target?.result) {
          setSelectedFile(readerEvent.target?.result as string);
        }
      };
    };

    const onTextChange = ({
      target: { name, value },
    }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setTextInputs((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    return (
        <Flex direction="column" bg="white" borderRadius={4} mt={2}>
          <Flex width="100%">
              {formTabs.map((item, index) => (
              <Tabitem
                key={index}
                item={item}
                selected={item.title === selectedTab}
                setSelectedTab={setSelectedTab}
              />
            ))}
          </Flex>
          <Flex p={4}>
                {selectedTab === "Post" && (
                  <TextInputs
                    textInputs={textInputs}
                    onChange={onTextChange}
                    handleCreatePost={handleCreatePost}
                    loading={loading}
                  />
                )}
                {selectedTab === "Images & Video" && (
                  <ImageUpload
                    selectedFile={selectedFile}
                    setSelectedFile={setSelectedFile}
                    setSelectedTab={setSelectedTab}
                    selectFileRef={selectFileRef}
                    onSelectImage={onSelectImage}
                  />
            )}
          </Flex>
          {error && (
            <Alert status='error'>
            <AlertIcon />
            <Text mr={2}>Error creating post</Text>
          </Alert>
          )}
        </Flex> 
    )
 }
 export default NewPostForm;