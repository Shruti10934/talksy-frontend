import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { server } from "../../constants/config";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${server}/api/v1/` }),
  tagTypes: ["Chat", "User", "Message"],
  endpoints: (builder) => ({
    myChats: builder.query({
      query: () => ({
        url: "chat/my",
        credentials: "include",
      }),
      providesTags: ["Chat"],
    }),

    searchUser: builder.query({
      query: (name) => ({
        url: `user/search?name=${name}`,
        credentials: "include",
      }),
      providesTags: ["User"],
    }),

    sendFriendRequest: builder.mutation({
      query: (data) => ({
        url: "user/send-request",
        method: "PUT",
        credentials: "include",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),

    getNotification: builder.query({
      query: () => ({
        url: "user/notifications",
        credentials: "include",
      }),
      keepUnusedDataFor: 0
    }),

    acceptFriendRequest: builder.mutation({
      query: (data) => ({
        url: "user/accept-request",
        method: "PUT",
        credentials: "include",
        body: data,
      }),
      invalidatesTags: ["Chat"],
    }),

    chatDetails: builder.query({
      query: ({chatId, populate=false}) => {
        let url = `chat/${chatId}`
        if(populate) url += "?populate=true";
        return {
          url,
          credentials: "include",
        }
      },
      providesTags: ["Chat"]
    }),

    getMessages: builder.query({
      query: ({chatId, page}) => ({
        url: `chat/message/${chatId}?page=${page}`,
        credentials: "include"
      }),
      keepUnusedDataFor: 0
    }),

    sendAttachments: builder.mutation({
      query: (data) => ({
        url: "/chat/message",
        method: "POST",
        credentials: "include",
        body: data,
      }),
    }),

    myGroups: builder.query({
      query: () => ({
        url: "chat/my/groups",
        credentials: "include",
      }),
      providesTags: ["Chat"],
    }),

    availableFriends: builder.query({
      query: (chatId) => {
        let url = `user/friends`
        if(chatId) url += `?chatId=${chatId}`;
        return {
          url,
          credentials: "include",
        }
      },
      providesTags: ["Chat"]
    }),

    newGroup: builder.mutation({
      query: ({name, members}) => ({
        url: "/chat/new",
        method: "POST",
        credentials: "include",
        body: {name, members},
      }),
      invalidatesTags: ["Chat"]
    }),

    renameGroup: builder.mutation({
      query: ({chatId, name}) => ({
        url: `chat/${chatId}`,
        method: "PUT",
        credentials: "include",
        body: {name},
      }),
      invalidatesTags: ["Chat"]
    }),

    removeMember: builder.mutation({
      query: ({chatId, userId}) => ({
        url: "chat/remove-member",
        method: "PUT",
        credentials: "include",
        body: {userId, chatId},
      }),
      invalidatesTags: ["Chat"]
    }),

    addMembers: builder.mutation({
      query: ({chatId, members}) => ({
        url: "chat/add-members",
        method: "PUT",
        credentials: "include",
        body: {members, chatId},
      }),
      invalidatesTags: ["Chat"]
    }),

    deleteChat: builder.mutation({
      query: (chatId) => ({
        url: `chat/${chatId}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Chat"]
    }),

    leaveGroup: builder.mutation({
      query: (chatId) => ({
        url: `chat/leave/${chatId}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Chat"]
    }),

    getStats: builder.query({
      query: () => ({
        url: 'admin/stats',
        credentials: "include",
      }),
      providesTags: ["Chat", "User", "Message"]
    }),

    getAllUsers: builder.query({
      query: () => ({
        url: 'admin/users',
        credentials: "include",
      }),
      providesTags: ["User"]
    }),

    getAllChats: builder.query({
      query: () => ({
        url: 'admin/chats',
        credentials: "include",
      }),
      providesTags: ["Chat"]
    }),

    getAllMessages: builder.query({
      query: () => ({
        url: 'admin/messages',
        credentials: "include",
      }),
      providesTags: ["Message"]
    }),


  }),
});

export default api;
export const {
  useMyChatsQuery,
  useLazySearchUserQuery,
  useSendFriendRequestMutation,
  useGetNotificationQuery,
  useAcceptFriendRequestMutation,
  useChatDetailsQuery,
  useGetMessagesQuery,
  useSendAttachmentsMutation,
  useMyGroupsQuery,
  useAvailableFriendsQuery,
  useNewGroupMutation,
  useRenameGroupMutation,
  useRemoveMemberMutation,
  useAddMembersMutation,  
  useDeleteChatMutation,
  useLeaveGroupMutation,
  useGetStatsQuery,
  useGetAllUsersQuery,
  useGetAllChatsQuery,
  useGetAllMessagesQuery,
} = api;
