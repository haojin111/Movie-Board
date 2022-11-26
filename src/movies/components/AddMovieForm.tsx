import React, { useState } from "react";

import { InputField, Button } from "shared/components";
import { MoviesAction } from "types";

interface AddMovieFormProps {
  onSubmit: (
    data: Record<"imageUrl" | "title" | "subtitle" | "description", string>
  ) => void;
  onCancel: () => void;
}

export function AddMovieForm({ onSubmit, onCancel }: AddMovieFormProps) {
  // TODO: Implement form for adding a movie
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const doSubmit = () => {
    onSubmit({
      title,
      imageUrl,
      subtitle,
      description,
    });
  };

  return (
    <form className="p-4 ">
      {/* TODO: Add code to make form actions work */}
      <InputField name="Url" setter={(value) => setImageUrl(value)} />
      <InputField name="Title" setter={(value) => setTitle(value)} />
      <InputField name="Subtitle" setter={(value) => setSubtitle(value)} />
      <InputField
        name="Description"
        setter={(value) => setDescription(value)}
      />
      <div className="text-center">
        {title.length &&
          imageUrl.length &&
          subtitle.length &&
          description.length && (
            <Button
              onClick={() => {
                doSubmit();
              }}
            >
              Submit
            </Button>
          )
        }
        <Button
          onClick={() => {
            onCancel();
          }}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
