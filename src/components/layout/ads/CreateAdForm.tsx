'use client'

import { useState, useCallback, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Camera, X, Upload, Eye, Save } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'
import { useDropzone } from 'react-dropzone'

type FormData = {
  title: string
  description: string
  category: string
  city: string
  postcode: string
  condition: string
  phoneNumber: string
  email: string
}

const categories = [
  'All Categories',
  'Electronics',
  'Furniture',
  'Books',
  'Sports',
  'Clothing',
  'Home & Garden',
  'Toys & Games',
  'Art & Crafts',
];
const conditions = ['Used - Fair', 'Used - Good', 'Used - Excellent', 'Brand New - Unboxed', 'Brand New - Used']

export default function CreateAdForm() {
  const [images, setImages] = useState<string[]>([])
  const [progress, setProgress] = useState(0)
  const { control, handleSubmit, watch, formState: { errors } } = useForm<FormData>()
  const watchedFields = watch()

  const onSubmit = (data: FormData) => {
    console.log(data, images)
    // Implement ad creation logic here
  }

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (images.length + acceptedFiles.length > 5) {
      alert('You can only upload a maximum of 5 images.')
      return
    }
    const newImages = acceptedFiles.map(file => URL.createObjectURL(file))
    setImages(prev => [...prev, ...newImages])
  }, [images])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: {'image/*': []} })

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index))
  }

  const calculateProgress = useCallback(() => {
    const requiredFields = ['title', 'description', 'category', 'city', 'postcode', 'condition', 'phoneNumber', 'email']
    const totalFields = requiredFields.length + 1
    
    const filledFields = requiredFields.reduce((count, fieldName) => {
      const value = watchedFields[fieldName as keyof FormData]
      return value ? count + 1 : count
    }, 0)

    const imagesFilled = images.length > 0 ? 1 : 0
    
    const newProgress = ((filledFields + imagesFilled) / totalFields) * 100
    setProgress(Math.min(newProgress, 100))
  }, [watchedFields, images])

  useEffect(() => {
    calculateProgress()
  }, [calculateProgress])

  // TODO: Add save draft functionality

  return (
    <form onSubmit={handleSubmit(onSubmit)} onChange={calculateProgress} className="space-y-8">
      <Progress value={progress} className="w-full bg-gray-200" />
      
      <Card>
        <CardContent className="p-6">
          <Label htmlFor="images" className="text-lg font-semibold mb-2 block">Photos (max 5)</Label>
          <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer">
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag 'n' drop some files here, or click to select files</p>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
            {images.map((img, index) => (
              <div key={index} className="relative aspect-square">
                <img src={img} alt={`Uploaded ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-6">
          <div>
            <Label htmlFor="title" className="text-sm font-medium">Title</Label>
            <Controller
              name="title"
              control={control}
              rules={{ required: 'Title is required', maxLength: 100 }}
              render={({ field }) => (
                <div>
                  <Input id="title" {...field} className="mt-1" maxLength={100} />
                  <p className="text-sm text-gray-500 mt-1">{field.value?.length || 0}/100 characters</p>
                </div>
              )}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
          </div>

          <div>
            <Label htmlFor="description" className="text-sm font-medium">Description</Label>
            <Controller
              name="description"
              control={control}
              rules={{ required: 'Description is required', maxLength: 1000 }}
              render={({ field }) => (
                <div>
                  <Textarea id="description" {...field} className="mt-1" maxLength={1000} />
                  <p className="text-sm text-gray-500 mt-1">{field.value?.length || 0}/1000 characters</p>
                </div>
              )}
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="category" className="text-sm font-medium">Category</Label>
              <Controller
                name="category"
                control={control}
                rules={{ required: 'Category is required' }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div>
              <Label htmlFor="condition" className="text-sm font-medium">Condition</Label>
              <Controller
                name="condition"
                control={control}
                rules={{ required: 'Condition is required' }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      {conditions.map((condition) => (
                        <SelectItem key={condition} value={condition}>{condition}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="city" className="text-sm font-medium">City</Label>
              <Controller
                name="city"
                control={control}
                rules={{ required: 'City is required' }}
                render={({ field }) => <Input id="city" {...field} className="mt-1" />}
              />
              {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
            </div>
            <div>
              <Label htmlFor="postcode" className="text-sm font-medium">Postcode</Label>
              <Controller
                name="postcode"
                control={control}
                rules={{ required: 'Postcode is required' }}
                render={({ field }) => <Input id="postcode" {...field} className="mt-1" />}
              />
              {errors.postcode && <p className="text-red-500 text-sm mt-1">{errors.postcode.message}</p>}
            </div>
          </div>

          <Separator />

          <div>
            <Label htmlFor="phoneNumber" className="text-sm font-medium">Phone Number</Label>
            <Controller
              name="phoneNumber"
              control={control}
              rules={{ required: 'Phone number is required' }}
              render={({ field }) => <Input id="phoneNumber" type="tel" {...field} className="mt-1" />}
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
            <Controller
              name="email"
              control={control}
              rules={{ 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              }}
              render={({ field }) => <Input id="email" type="email" {...field} className="mt-1" />}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button type="button" variant="outline">
          <Save className="w-4 h-4 mr-2" />
          Save Draft
        </Button>
        <Button type="submit" className="bg-[#2F892C] text-white hover:bg-[#246B22]">Create Ad</Button>
      </div>
    </form>
  )
}

