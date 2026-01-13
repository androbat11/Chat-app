 export type ListOrganizationDocumentGroupsRequest = MessageRequestBase<
  "list-organization-document-groups",
  AppUserAccountContext | ApiUserAccountContext
> & {
  isContentLibrary: boolean | undefined;
};
 
 organizationDocumentGroups(
    req: ListOrganizationDocumentGroupsRequest
  ): Promise<ListOrganizationDocumentGroupsResponse | ErrorResponseMessageBase<"server-error">>;